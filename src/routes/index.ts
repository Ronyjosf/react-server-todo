import {getTodoList, updateTodo, deleteTodo, addTodo} from "../controllers/todo";
import {Router} from "express";

const router: Router = Router()

router.post("add-todo", addTodo)
router.get("get-todos", getTodoList)
router.get("delete-todo", deleteTodo)
router.purge("update-todo", updateTodo)

export default router
