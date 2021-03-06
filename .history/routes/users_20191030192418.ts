var router = require('koa-router')();
import { Context } from 'koa'
router.prefix('/users');

const UsersController = require("../controller/user")

router.post("/register",function *(this:Context){
  yield UsersController.create(this)
});
router.get("/user/:id",function *(this:Context,next:Function){
  yield UsersController.detail(this)
});

router.post("/register",function *(this:Context){
  yield UsersController.create(this)
});


module.exports = router;
