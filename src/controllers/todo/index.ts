import {Response, Request} from "express"

import {ITodo} from "../../types/todo";
import Todo from "../../models/todo"

const getTodoList = async (req: Request, res: Response): Promise<void> =>{
    try{
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({todoList: allTodos})
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> =>{
    try{
        const body = req.body as Pick<ITodo, "name" | "description" | "status">
        // using Todo ( model) it creates a collection in the mongoDB
        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status
        })

        const newTodo: ITodo = await todo.save()
        const todoList: ITodo[] = await Todo.find()

        res
            .status(201)
            .json({message: "Todo added ", newTodo, todoList})
    }catch (error) {
        throw error
    }

}
const updateTodo = async (req: Request, res: Response): Promise<void> =>{
    try {
        const body = req.body as Pick<ITodo, "name" | "description" | "status">
        const id = req.params
        // const {
        //     params: { id },
        //     body,
        // } = req
        const updateTodo: ITodo | null  = await Todo.findByIdAndUpdate(id, body)
        const allTodos: ITodo[] = await Todo.find()
        res.status(200)
            .json(
                {message:"todo updated",
                    todo: updateTodo,
                    todos: allTodos
                })
    } catch (error){
        throw error
    }
}
const deleteTodo = async (req: Request, res: Response): Promise<void> =>{
    try {
        const deleteTodoItem: ITodo | null = await Todo.findByIdAndRemove(req.params.id)
        const allTodos: ITodo[] = await Todo.find()
        res.status(200)
            .json({message: "deleted Todo item",
            deleteTodoItem: deleteTodoItem,
            todos: allTodos
            })

    } catch (error){
        throw error
    }

}

export {deleteTodo, updateTodo, getTodoList, addTodo}
