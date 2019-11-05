//controler层可做数据处理返回到前端，controller层拿到的数据就是已经在modules层已经查出来的数据
const UserModel = require('../modules/user');
import { Context } from 'koa'
import { callbackify } from 'util';
const bcrypt = require('bcrypt')

class userController {
  // 创建用户
  static async create(ctx: any) {
    let req = ctx.request.body
    if (req.name && req.pass) {
      try {
        const query = await UserModel.getUserIfo(req.name)
        if (query) {
          ctx.body = {
            code: '201',
            desc: '用户已存在'
          }
        } else {
          await UserModel.createUser(req);
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
  static async login(ctx: any) {
    const req = ctx.request.body
    try {
      if(){}
      const data = await UserModel.login(req);
      //密码认证
      const _comparePwd = (req:any, data:any) => {
        return new Promise((resolve) => {
          bcrypt.compare(req.pass, data.pass, (err:boolean, res:boolean) => {
            if(req.name == data.name && res){
              resolve(res)
            }else{
              resolve(err)
            }
          })
        })
      }
      let isCorrect = await _comparePwd(req, data)
      console.log(isCorrect)
      if(isCorrect){
        ctx.body = {
          code: "200",
          message: "登录成功",
          data:{}
        }
      }else{
        ctx.body = {
          code: "412",
          message: "密码错误！",
          data
        }
      }
    } catch (err) {
      ctx.body = {
        code: "413",
        message: "用户不存在",
        data: err
      }
    }
  }
}

module.exports = userController