const asyncHandler = require('express-async-handler')
const Todo = require('../models/TodoModel')
const User = require('../models/UserModel')


//GET ALL TODOS
const getTodos = asyncHandler(async(req,res)=>{
    const todos = await Todo.find({user:req.user._id})    
    res.status(200).json(todos)
    
})

//CREATE TODO
const CreateTodo = asyncHandler(async(req,res)=>{
    const {title,priority}=req.body
    if(!title)
    {
        res.status(400).json({error:"Please Enter The task"})
    }
    
    const todo = await Todo.create({
        user:req.user._id,
        title,
        priority
    })
    res.status(201).json({message:"Todo added",data:todo})
})

//UPDATE TODO TITLE
const UpdateTodo = asyncHandler(async(req,res)=>{

    const todo = await Todo.findById(req.params.id)
    if(!todo)
    {
        res.status(400).json({error:"No Todo Found"})
    }
    const UpdatedTodo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(UpdatedTodo)
})

//DELETE TODO
const DeleteTodo = asyncHandler(async(req,res)=>{
    const todo = await Todo.findById(req.params.id)
    if(!todo)
    {
        res.status(400).json({error:"No Todo Found"})
    }
    await todo.remove()
    res.status(200).json({message:`Todo Deleted ${req.params.id}`})
})

//CANCEL TODO
const CancelTodo = asyncHandler(async(req,res)=>{
    
    const todo = await Todo.findById(req.params.id)
    const is_cancelled = todo.is_finished
    if(!todo)
    {
        res.status(400).json({error:"No Todo Found"})
    }
    const UpdatedTodo = await Todo.findByIdAndUpdate(req.params.id,{is_cancelled:!is_cancelled},{new:true})
    res.status(200).json(UpdatedTodo)
})

//FINISH TODO
const FinishTodo = asyncHandler(async(req,res)=>{

    const todo = await Todo.findById(req.params.id)
    const is_finished = todo.is_finished
    if(!todo)
    {
        res.status(400).json({error:"No Todo Found"})
    }
    const UpdatedTodo = await Todo.findByIdAndUpdate(req.params.id,{is_finished:!is_finished},{new:true})
    res.status(200).json(UpdatedTodo)
})
module.exports ={
    getTodos,CreateTodo,UpdateTodo,DeleteTodo,CancelTodo,FinishTodo
}