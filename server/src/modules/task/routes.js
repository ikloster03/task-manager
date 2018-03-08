import express from 'express'
import Task from 'controllers/task'
const router = express.Router()

router.use(Task.middleware)

//get all lists
router.get('/', Task.all)

//get list by id
router.get('/:id', Task.find)

//create list
router.post('/', Task.create)

//update list by id
router.put('/:id', Task.update)

//delete list by id
router.put('/:id', Task.delete)

export default router
