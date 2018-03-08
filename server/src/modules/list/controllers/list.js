import List from '../models/list'

export default {
    middleware(req, res, next) {
        next()
    },
    all(req, res) {
        List.find({ }, ( err, lists ) => {
            if (err) return res.status(500).send(err)
            res.send(lists)
        })
    },

    find(req, res) {
        List.findById(req.params.id, ( err, list ) => {
            if (err) return res.status(500).send(err)
            res.send(list)
        })
    },

    create(req, res) {
        let list = {
            name: req.body.name,
            description: req.body.description ? req.body.description : ''
        }

        List.create(list, (err, list) => {
            if (err) return res.status(500).send(err)
            res.send(list)
        })
    },

    update(req, res) {
        let list = {
            name: req.body.name,
        }

        List.findByIdAndUpdate(req.params.id, list, (err, list) => {
            if (err) return res.status(500).send(err)
            res.send(list)
        })
    },
    delete(req, res) {
        List.findByIdAndRemove(req.params.id, (err, list) => {
            if (err) return res.status(500).send(err)
            res.send(list)
        })
    },
}