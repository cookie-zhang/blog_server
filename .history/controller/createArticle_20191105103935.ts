//controler层可做数据处理返回到前端，controller层拿到的数据就是已经在modules层已经查出来的数据
const createArticleModel = require('../modules/createArticle');
import { Context } from 'koa'
import { callbackify } from 'util';

class articleController {
  // 创建文章
  static async create(ctx: any) {
    let req = ctx.request.body
      try {
          await createArticleModel.createArticle(req);
          ctx.body = {
            code: '200',
            message: "创建文章成功",
            userInfo: {
              name: req.name
            }
          
        }
      } catch (err) {
        ctx.body = {
          code: "412",
          message: "创建文章失败",
          data: err
        }
      }
  }
}

module.exports = userController