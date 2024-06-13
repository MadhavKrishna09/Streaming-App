import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// Path: src/controllers/user.controller.js

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body;
  if (
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "Please fill in all fields");
  }
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  const avatarlLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarlLocalPath) {
    throw new ApiError(400, "Please provide avatar image");
  }
  const avatar = await uploadOnCloudinary(avatarlLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(500, "Failed to upload avatar");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, "User created successfully", createdUser));
});

export { registerUser };
