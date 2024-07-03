import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(express.json());
const mongoURL =
  "mongodb+srv://harshalhonde17:harshal172003@cluster0.b0mwyen.mongodb.net/Blogs?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error is", err);
  });
app.get("/api/get-message", (req, res) => {
  res.json({ message: "Uday hii" });
});
app.listen(port, () => {
  console.log("Server is running on Port", port);
});
