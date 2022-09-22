const express = require('express')
const router = express.Router()
const {getTodos,CreateTodo,UpdateTodo,DeleteTodo,CancelTodo,FinishTodo,Report}  = require('../controllers/TodoController')
const {protect} =  require('../middleware/authMiddleware')

//ENDPOINTS
 
router.get('/',protect,getTodos)


router.post('/',protect,CreateTodo)

router.delete('/delete/:id',protect,DeleteTodo)

router.put('/update/:id',protect,UpdateTodo)

router.put('/cancel/:id',protect,CancelTodo)

router.put('/finish/:id',protect,FinishTodo)

router.get('/report/',protect,Report)

module.exports = router;