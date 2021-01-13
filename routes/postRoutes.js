const express = require("express");
const router = express.Router();
const db = require("../database/models");
require("dotenv").config();

const post = db.Post;

router.get("/test", (req, res) => {
  res.send("test");
});

router.get("/all", async (req, res) => {
  const allPosts = await post.findAll();
  res.send(allPosts);
});

router.get(`/color/:color`, async (req, res) => {
  const color = req.params.color;
  const colorSearch = await post.findAll({
    where: {
      color: color,
    },
  });
  res.send(colorSearch);
});

router.get(`/size/:size`, async (req, res) => {
  const size = req.params.size;
  const sizeSearch = await post.findAll({
    where: {
      size: size,
    },
  });
  res.send(sizeSearch);
});

router.get(`/name/:name`, async (req, res) => {
  const name = req.params.name;
  const nameSearch = await post.findAll({
    where: {
      petName: name,
    },
  });
  res.send(nameSearch);
});

router.get('/limit/:number', async (req,res)=>{

})

router.get('/resolved', async(req, res)=>{
  const resolved = await post.findAll({
    where: {
      StatusTypeId: 1
    }
  }
  );

  res.send(resolved);
});

router.get('/unresolved', async(req, res)=>{
  const unresolved = await post.findAll({
    where: {
      StatusTypeId: 2
    }
  }
  );

  res.send(unresolved);
});

router.get('/lost', async(req, res)=>{
  const lost = await post.findAll({
    where: {
      PostTypeId: 1
    }
  }
  );

  res.send(lost);
});

router.get('/found', async(req, res)=>{
  const found = await post.findAll({
    where: {
      PostTypeId: 2
    }
  }
  );

  res.send(found);
});

module.exports = router;
