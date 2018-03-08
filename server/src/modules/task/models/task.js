import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TaskSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
})

const TaskModel = mongoose.model('tasks', TaskSchema)

export default TaskModel