import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import router from "./Router.js";

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(DB_URL, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("DB connected");
    app.listen(PORT, () =>
      console.log(`Now app available at the ${PORT} port`),
    );
  } catch (e) {
    console.log(e);
  }
}

startApp();
