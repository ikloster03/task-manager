import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ListSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
})

const ListModel = mongoose.model('lists', ListSchema)

export default ListModel