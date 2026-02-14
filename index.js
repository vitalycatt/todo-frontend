import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import router from "./Router.js";

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

const app = express();

// TODO: ADD WHITELIST DOMAINS
app.use(cors());

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
