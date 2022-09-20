const express = require('express')
const router = express.Router()
const {getTodos,CreateTodo,UpdateTodo,DeleteTodo,CancelTodo,FinishTodo}  = require('../controllers/TodoController')

//ENDPOINTS
router.get('/',getTodos)

router.post('/',CreateTodo)

router.delete('/delete/:id',DeleteTodo)

router.put('/update/:id',UpdateTodo)

router.put('/cancel/:id',CancelTodo)

router.put('/finish/:id',FinishTodo)



module.exports = router;