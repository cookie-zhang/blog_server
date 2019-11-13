var router = require('koa-router')();
import { Context } from 'koa'
const articleController = require("../controller/article")

router.post("/createArticle",function *(this:Context){
  yield articleController.create(this)
});

router.post("/articleList",function *(this:Context){
    yield articleController.list(this)
  });

router.get("/user/:id",function *(this:Context,next:Function){
  yield articleController.detail(this)
});


module.exports = router;
