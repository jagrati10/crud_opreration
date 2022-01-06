const express = require('express')
const { updateOne } = require('../models/schema')
const router = express.Router()
const schema = require('../models/schema')
router.get('/users', async (req, res) => {
    try {
        const users = await schema.find()
        res.json(users)
    } catch (err) {
        res.send('error' + err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const user = await schema.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send('error' + err)
    }
})

router.post('/newuser', async (req, res) => {
    const user = new schema({
        name: req.body.name,
        tech: req.body.tech,
        enrolled: req.body.enrolled
    })
    try {
        const u1 = await user.save()
        res.json(u1)
    }
    catch (err) {
        res.send('error' + err)
    }
})

module.exports = router