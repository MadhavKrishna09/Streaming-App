import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb", extended: true }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

// import routes
// import userRouter from "./routes/user.routes.js";

// import userRoutes
import userRouter from "./routes/user.routes.js";
// import healthcheckRoutes
import healthcheckRouter from "./routes/healthcheck.routes.js";
//import tweetRouter
import tweetRouter from "./routes/tweet.routes.js";
// import subscriptionRoutes
import subscriptionRouter from "./routes/subscription.routes.js";
// import videoRoutes
import videoRouter from "./routes/video.routes.js";
// import commentRoutes
import commentRouter from "./routes/comment.routes.js";
// import likeRoutes
import likeRouter from "./routes/like.routes.js";
// import playlistRoutes
import playlistRouter from "./routes/playlist.routes.js";
// import dashboadRoutes
import dashboardRouter from "./routes/dashboard.routes.js";

// routes Declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/tweets", tweetRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);

export { app };
