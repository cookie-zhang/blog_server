var router = require('koa-router')();
import { Context } from 'koa'
const articleController = require("../controller/createArticle")

router.post("/createArticle",function *(this:Context){
  yield articleController.create(this)
});


router.post("/a",function *(this:Context){
    yield articleController.create(this)
  });



// router.get("/user/:id",function *(this:Context,next:Function){
//   yield articleController.detail(this)
// });


module.exports = router;
