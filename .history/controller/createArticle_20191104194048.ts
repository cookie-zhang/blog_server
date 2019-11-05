//controler层可做数据处理返回到前端，controller层拿到的数据就是已经在modules层已经查出来的数据
const createArticleModel = require('../modules/createArticle');
import { Context } from 'koa'
import { callbackify } from 'util';
const bcrypt = require('bcrypt')

class userController {
  // 创建文章
  static async create(ctx: any) {
    let req = ctx.request.body
    if (req.name && req.pass) {
      try {
        const query = await createArticleModel.getArticleIfo(req.name)
        if (query) {
          ctx.body = {
            code: '201',
            desc: '用户已存在'
          }
        } else {
          await createArticleModel.createArticle(req);
          ctx.body = {
            code: '200',
            message: "创建用户成功",
            userInfo: {
              name: req.name
            }
          }
        }
      } catch (err) {
        ctx.body = {
          code: "412",
          message: "创建用户失败",
          data: err
        }
      }
    } else {
      ctx.body = {
        code: "416",
        message: "参数不全"
      }
    }
  }
}

module.exports = userController