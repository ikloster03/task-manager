import express from 'express'
import List from 'controllers/list'
const router = express.Router()

router.use(List.middleware)

//get all lists
router.get('/', List.all)

//get list by id
router.get('/:id', List.find)

//create list
router.post('/', List.create)

//update list by id
router.put('/:id', List.update)

//delete list by id
router.put('/:id', List.delete)

export default router
