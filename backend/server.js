import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Security middleware to set various HTTP headers
app.use(morgan("dev")); // log the requests to the console

app.get("/test", (req, res) => {
  console.log(res.getHeaders());
  res.send("Hello from backend");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
