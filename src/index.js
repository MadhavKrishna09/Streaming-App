import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});

//after connection promise and catch in promise listen to port
// const PORT = process.env.PORT || 5000;
connectDB().
then(() => {
    app.listen(process.env.PORT||8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error(error);
    process.exit(1);
});
