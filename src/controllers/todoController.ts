import { Request, Response } from "express";
import { TodoService } from "../services/todoService";

export class TodoController {
  static async getAllTodos(req: Request, res: Response) {
    try {
      const todos = await TodoService.getAllTodos();
      res.status(200).json(todos);
    } catch (err: unknown) {
      console.error(`Error while fetching todos list: ${err}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getTodoById(req: Request, res: Response) {
    try {
      const todo = await TodoService.getTodoById(req.params.id);
      if (!todo) return res.status(404).json({ message: "todo not found" });
      res.status(200).json(todo);
    } catch (err: unknown) {
      console.error(`Error finding todo: ${err}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async createNewTodo(req: Request, res: Response) {
    try {
      const data = req.body;
      const todo = await TodoService.createTodo(data);
      if (!todo) return res.status(400).json({ error: "Error creating todo" });
      res.status(201).json(todo);
    } catch (err: unknown) {
      console.error(`Error creating new todo: ${err}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async updateTodo(req: Request, res: Response) {
    try {
      const updatedTodo = await TodoService.updateTodo(req.params.id, req.body);
      if (!updatedTodo)
        return res.status(404).json({ error: "Todo not found" });
      res.status(200).json(updatedTodo);
    } catch (err: unknown) {
      console.error(`Error updating todo: ${err}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async deleteTodo(req: Request, res: Response) {
    try {
      const deletedTodo = await TodoService.deleteTodo(req.params.id);
      if (!deletedTodo)
        return res.status(404).json({ error: "Todo not found" });
      res.status(200).json(deletedTodo);
    } catch (err: unknown) {
      console.error(`Error deleting todo: ${err}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
