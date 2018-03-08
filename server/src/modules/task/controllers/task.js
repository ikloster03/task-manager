import Task from '../models/task'

export default {
    middleware(req, res, next) {
        next()
    },
    all(req, res) {
        Task.find({ }, ( err, tasks ) => {
            if (err) return res.status(500).send(err)
            res.send(tasks)
        })
    },

    find(req, res) {
        Task.findById(req.params.id, ( err, task ) => {
            if (err) return res.status(500).send(err)
            res.send(task)
        })
    },

    create(req, res) {
        let task = {
            name: req.body.name,
            description: req.body.description ? req.body.description : ''
        }

        Task.create(task, (err, task) => {
            if (err) return res.status(500).send(err)
            res.send(task)
        })
    },

    update(req, res) {
        let task = {
            name: req.body.name,
        }

        Task.findByIdAndUpdate(req.params.id, task, (err, task) => {
            if (err) return res.status(500).send(err)
            res.send(task)
        })
    },
    delete(req, res) {
        Task.findByIdAndRemove(req.params.id, (err, task) => {
            if (err) return res.status(500).send(err)
            res.send(task)
        })
    },
}