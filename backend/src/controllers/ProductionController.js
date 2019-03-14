const production = require("../models/Production")


module.exports = ({
    async index(req, res){
        const productions = await production.find({}).sort('-createdAt')
        return res.json(productions)
    },

    async store(req, res){
        const Production = await production.create(req.body)
        req.io.emit('New', Production)
        return res.json(Production)
    },

    async update(req, res){
        const Productions = await production.findById(req.params.id)
        Productions.set({
            author: req.body.author,
            title: req.body.title,
            text: req.body.text
        })
        await Productions.save()

        req.io.emit('Update', Productions)

        return res.json(Productions)
    }
})