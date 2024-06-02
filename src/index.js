import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

//after connection promise and catch in promise listen to port
// const PORT = process.env.PORT || 5000;
connectDB().
then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error(error);
    process.exit(1);
});
