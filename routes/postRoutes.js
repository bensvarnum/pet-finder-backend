const express = require('express');
const router = express.Router();
const db = require('../database/models');
require('dotenv').config(); 



router.get('/test', (req, res)=>{
    res.send('test')
})

router.get('/all', async(req, res)=>{
     const allPosts = await db.Post.findAll()
    res.send(allPosts)
})



module.exports = router;