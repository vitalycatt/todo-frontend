import mongoose from "mongoose";

const Todos = new mongoose.Schema(
  {
    description: { type: String, require: true },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
  },
  { applyTimestamps: true },
);

export default mongoose.model("Todos", Todos);

// id: A unique identifier for the task
// description: A short description of the task
// status: The status of the task (todo, in-progress, done)
// createdAt: The date and time when the task was created
// updatedAt: The date and time when the task was last updated
