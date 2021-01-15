const express = require("express");
const router = express.Router();
const db = require("../database/models");
require("dotenv").config();

const post = db.Post;

router.post('/add', async(req, res)=>{
    console.log(req.body)
    const { color, size, location, petName, email, phoneNumber, PostTypeId } = req.body;
    const { mimetype, originalname, buffer } = req.file;

    const newPost = await post.create({
        color,
        size,
        location,
        petName,
        email,
        phoneNumber,
        PostTypeId,
        StatusId: 2,
        imageType: mimetype,
        imageName: originalname,
        imageData: buffer
    })

    res.send('New Post created');
})

router.patch('/update/:id', async(req, res)=>{
    const { id } = req.params;

    const updatePost = await post.update(req.body, {
        where: {
            id
        }
    });
    
    res.send("Updated");
})

module.exports = router;