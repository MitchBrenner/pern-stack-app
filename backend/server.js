import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Security middleware to set various HTTP headers
app.use(morgan("dev")); // log the requests to the console

app.get("/test", (req, res) => {
  console.log(res.getHeaders());
  res.send("Hello from backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
