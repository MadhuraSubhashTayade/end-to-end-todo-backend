import { Todo, ITodo } from "../models/todoModel";
import { z } from "zod";

const validationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  completed: z.string().optional(),
});

export class TodoService {
  static async getAllTodos(): Promise<ITodo[]> {
    return Todo.find();
  }

  static async getTodoById(id: string): Promise<ITodo | null> {
    return Todo.findById(id);
  }

  static async createTodo(data: Partial<ITodo>): Promise<ITodo> {
    const validatedData = validationSchema.parse(data);
    const todo = new Todo(validatedData);
    return todo.save();
  }

  static async updateTodo(
    id: string,
    data: Partial<ITodo>
  ): Promise<ITodo | null> {
    const validatedData = validationSchema.partial().parse(data);
    return Todo.findByIdAndUpdate(id, validatedData, { new: true });
  }

  static async deleteTodo(id: string): Promise<ITodo | null> {
    return Todo.findByIdAndDelete(id);
  }
}
