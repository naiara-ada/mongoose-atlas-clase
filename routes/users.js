const express = require('express');
const router = express.Router();
const User = require('../models/User.js')

router.post('/create', async(req, res) =>{
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).send(user);
        
    } catch (error) {
        console.error(error);
        res.status(500).send({mensaje: 'There was a problem trying to create a user'});
    }
});

router.get('/', async(req, res) =>{
    try {
        const users = await User.find();
        res.json(users);
        
    } catch (error) {
        
    }
})

module.exports = router;