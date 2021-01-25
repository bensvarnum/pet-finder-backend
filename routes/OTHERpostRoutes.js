const express = require("express");
const router = express.Router();
const db = require("../models");
require("dotenv").config();

const post = db.Post;

router.post("/add", async (req, res) => {
  console.log(req.body);
  const {
    color,
    size,
    location,
    petName,
    email,
    phoneNumber,
    postTypeId,
    description,
  } = req.body.form;

  const newPost = await post.create({
    color,
    size,
    location,
    petName,
    email,
    phoneNumber,
    PostTypeId: postTypeId,
    StatusId: 2,
    extraNotes,
    description,
  });

  res.send("New Post created");
});

router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;

  const updatePost = await post.update(req.body, {
    where: {
      id,
    },
  });

  res.send("Updated");
});

module.exports = router;
