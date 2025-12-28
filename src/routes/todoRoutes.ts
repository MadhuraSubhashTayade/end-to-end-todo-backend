import { Router } from "express";
import { TodoController } from "../controllers/todoController";

const router = Router();
router.get("/todos", TodoController.getAllTodos);
router.get("/todos/:id", TodoController.getTodoById);
router.post("/todos", TodoController.createNewTodo);
router.put("/todos/:id", TodoController.updateTodo);
router.delete("/todos/:id", TodoController.deleteTodo);

export default router;
