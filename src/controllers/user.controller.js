import { asyncHandler } from "../utils/asyncHandler.js";

// Path: src/controllers/user.controller.js

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "from registerUser",
    });
});

export { registerUser };