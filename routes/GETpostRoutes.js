const express = require("express");
const router = express.Router();
const db = require("../models");
const { search } = require("./OTHERpostRoutes");
require("dotenv").config();

const post = db.Post;

router.get("/test", (req, res) => {
  res.send("test");
});

router.get("/all", async (req, res) => {
  const allPosts = await post.findAll();
  console.log(allPosts);
  res.send(allPosts);
});

router.get(`/color/:color/:limit`, async (req, res) => {
  const color = req.params.color;
  const colorSearch = await post.findAll({
    where: {
      color: color,
      StatusId: 2,
    },
    limit: req.params.limit,
  });
  res.send(colorSearch);
});

router.get(`/size/:size/:limit`, async (req, res) => {
  const size = req.params.size;
  const sizeSearch = await post.findAll({
    where: {
      size: size,
      StatusId: 2,
    },
    limit: req.params.limit,
  });
  res.send(sizeSearch);
});

router.get(`/name/:name/:limit`, async (req, res) => {
  const name = req.params.name;
  const nameSearch = await post.findAll({
    where: {
      petName: name,
      StatusId: 2,
    },
    limit: req.params.limit,
  });
  res.send(nameSearch);
});

router.get("/resolved/:limit", async (req, res) => {
  const resolved = await post.findAll({
    where: {
      StatusId: 1,
    },
    limit: req.params.limit,
  });

  res.send(resolved);
});

router.get("/unresolved/:limit", async (req, res) => {
  const unresolved = await post.findAll({
    where: {
      StatusId: 2,
    },
  });

  res.send(unresolved);
});

router.get("/lost/:limit", async (req, res) => {
  const lost = await post.findAll({
    where: {
      PostTypeId: 1,
      StatusId: 2,
    },
    limit: req.params.limit,
  });

  res.send(lost);
});

router.get("/found/:limit", async (req, res) => {
  const found = await post.findAll({
    where: {
      PostTypeId: 2,
      StatusId: 2,
    },
    limit: req.params.limit,
  });

  res.send(found);
});

module.exports = router;
