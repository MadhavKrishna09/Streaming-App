# Streaming-App: The Backend Symphony

Welcome to the Streaming-App, a robust video hosting platform with integrated tweet-like features, leveraging a variety of technologies and frameworks. With Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Bcrypt, Cloudinary, and more, I've constructed a robust backend for a feature-rich video hosting service.

## 🚀 Features

### Video Hosting (similar to YouTube)
- **User Authentication**:
  - User registration and login functionalities.
  - Secure authentication using JWT and bcrypt.
- **Video Management**:
  - Effortless video uploads.
  - Options to like, dislike, and comment on videos.
  - Enhanced features like comment likes, dislikes, and replies.
- **Subscription System**:
  - Users can subscribe to and unsubscribe from channels.

### Tweet Functionalities
- **Tweet Interaction**:
  - Users can post tweets, like, and dislike them.
  - Comment on tweets to encourage engagement.

### Dashboard
- Comprehensive overview of channel and video management tools.

## 🛠️ Technologies Used
- **Node.js & Express.js**: The backbone of the backend development.
- **MongoDB & Mongoose**: Database management for storing user data, videos, and tweets.
- **JWT & Bcrypt**: Secure user authentication mechanisms.
- **Multer & Cloudinary**: Video upload and storage handling.
- And many more.

## Configuration

Set up your application with the following environment variables:

- `PORT`: Specify your preferred port number.
- `MONGODB_URI`: Your MongoDB connection URI.
- `CORS_ORIGIN`: Allowed CORS origin (e.g., `*` for all or specify your frontend domain).
- `ACCESS_TOKEN_SECRET`: Secure string for generating access tokens.
- `ACCESS_TOKEN_EXPIRY`: Expiration time for access tokens (e.g., `1d` for one day).
- `REFRESH_TOKEN_SECRET`: Secure string for generating refresh tokens.
- `REFRESH_TOKEN_EXPIRY`: Expiration time for refresh tokens (e.g., `10d` for ten days).

### Session and Cookies
The application uses a combination of session and cookies. The `ACCESS_TOKEN` is not stored in the database, while the `REFRESH_TOKEN` is stored for a specific duration.

### Cloudinary Configuration
For integrating Cloudinary:

- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.

Ensure these environment variables are set in your deployment environment or provide a `.env` file for local development.

## Postman Link
[Postman Documentation](https://documenter.getpostman.com/view/31685048/2s9YsQ6oj4)

## Model Link
https://app.eraser.io/workspace/pNGSqTCXzR2H5rJz9DOV?origin=share

## Learning Journey

This project exemplifies my dedication to learning, inspired by Hitesh Choudhary's teachings. I closely followed his "Chai aur Code" backend playlist, completing assignments that span both basic and advanced functionalities. The project embraces best practices like JWT, bcrypt, access tokens, and refresh tokens.

## 🤝 Contributing

Contributions are welcome! If you're interested in contributing to **Streaming-App**, please follow these guidelines:

- **Bug Reports**: Open an issue with a clear description and steps to reproduce.
- **Feature Requests**: Submit an issue with detailed specifications.
- **Pull Requests**: Fork the repository, create a new branch, make changes, and submit a pull request.

Thank you for contributing!

## 🔮 Future Vision

This is just the beginning. I plan to continually enhance this project with additional features based on user feedback and evolving needs. Additionally, if time permits, I aim to explore frontend development to provide a seamless user experience.

I am deeply grateful to Hitesh Sir for his valuable insights and guidance throughout this learning journey. I have devoted substantial time to reading, watching tutorials, and building upon the provided assignments to shape this project into a feature-rich backend.

Thank you for being a part of my learning journey!

## License
This project is licensed under the MIT License - Chai Aur backend, @hiteshchoudhary
