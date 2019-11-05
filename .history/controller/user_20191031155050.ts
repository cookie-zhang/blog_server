//controler层可做数据处理返回到前端，controller层拿到的数据就是已经在modules层已经查出来的数据
const UserModel = require('../modules/user');
import { Context } from 'koa'
import { callbackify } from 'util';
const bcrypt = require('bcrypt')

const aa =  async function(req:any, data:any){
  return await bcrypt.compare(req.pass, data.pass, async (err:boolean, res:boolean) => {
    if (req.name == data.name && res) {
      console.log(1)
      return true
    }
    if(err) {
      return false
    }
  })
}
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
  //获取用户详情
  static async detail(ctx: any) {
    let id = ctx.params.id;
    if (id) {
      try {
        let data = await UserModel.getUserDetails(id);
        ctx.body = {
          code: "200",
          message: "查询成功",
          data
        }
      } catch (err) {
        ctx.body = {
          code: "412",
          message: "查询失败",
          data: err
        }
      }
    } else {
      ctx.body = {
        code: "416",
        message: "参数不全",
      }
    }
  }


  static async login(ctx: any) {
    console.log("---"+ctx)
    const req = ctx.request.body
    try {
      const data = await UserModel.login(req);
      //密码认证
      //通过_comparePwd方法将用户输入的明文与数据的加密过的进行比对
      const _comparePwd = (fromUser:any, fromDatabase:any) => {
        return new Promise((resolve) => {
          bcrypt.compare(fromUser, fromDatabase, (err:boolean, res:boolean) => {
            resolve(res)
          })
        })
      }
      let isCorrect = await _comparePwd(req.pass, data.pass)
      console.log()
      










      //  bcrypt.compare(req.pass, data.pass, (err:boolean, res:boolean) => {
      //   if (req.name == data.name && res) {
      //     resolve(callback)
      //   }
      //   if(err) {
      //     data.status = 201
      //    data.data="登录失败"
      //   }
      // })
      // const bo = await aa(req,data)
      // console.log( bo )
      // if(bo){
      //   ctx.body = {
      //     code: "200",
      //     message: "查询成功",
      //     data:{}
      //   }
      // }else{
      //   ctx.body = {
      //     code: "412",
      //     message: "密码错误！",
      //     data
      //   }
      // }
     

    } catch (err) {
      ctx.body = {
        code: "412",
        message: "查询失败",
        data: err
      }
    }
  }
}

module.exports = userController