import { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Todo = model<ITodo>("Todo", todoSchema);
