var router = require('koa-router')();
import { Context } from 'koa'
const articleController = require("../controller/createArticle")

router.post("/register",function *(this:Context){
  yield articleController.create(this)
});
// router.get("/user/:id",function *(this:Context,next:Function){
//   yield articleController.detail(this)
// });


module.exports = router;
