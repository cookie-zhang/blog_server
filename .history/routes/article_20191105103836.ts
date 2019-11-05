var router = require('koa-router')();
import { Context } from 'koa'
const aController = require("../controller/createArticle")

router.post("/register",function *(this:Context){
  yield UsersController.create(this)
});
router.get("/user/:id",function *(this:Context,next:Function){
  yield UsersController.detail(this)
});

router.post("/login",function *(this:Context){
  yield UsersController.login(this)
});


module.exports = router;
