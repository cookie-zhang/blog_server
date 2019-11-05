//controler层可做数据处理返回到前端，controller层拿到的数据就是已经在modules层已经查出来的数据
const articleModel = require('../modules/article');
import { Context } from 'koa'
import { callbackify } from 'util';

class articleController {
  // 创建文章
  static async create(ctx: any) {
    let req = ctx.request.body
      try {
          await articleModel.createArticle(req);
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

  // 查询文章列表
  static async list(ctx: any) {
    let req = ctx.request.body
      try {
          await articleModel.articleList(req);
          ctx.body = {
            code: '200',
            message: "查询成功",
            data:data
        }
      } catch (err) {
        ctx.body = {
          code: "412",
          message: "查询失败",
          data: err
        }
      }
  }



}

module.exports = articleController