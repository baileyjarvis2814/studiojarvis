import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(
    cors({
        origin: ["https://https://studiojarvis.netlify.app/contact", "http://localhost:3000"], // React app
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );
app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
