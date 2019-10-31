const UserModel = require('../modules/user');
import { Context } from 'koa'
const bcrypt = require('bcrypt')

class userController {
    // 创建用户
    static async create(ctx:any){
        let req = ctx.request.body
        req.pass = bcrypt.hashSync(req.pass, 10)
        if( req.name && req.pass){
            try {
                await UserModel.createUser(req);
                ctx.body = {
                    code:'200',
                    message:"创建用户成功",
                    // data
                }
            } catch (err){
                ctx.body= {
                    code:"412",
                    message:"创建用户失败",
                    data:err
                }
            }
        }else {
            ctx.body={
                code:"416",
                message:"参数不全"
            }
        }
    }
    //获取用户详情
    static async detail(ctx:any){
        let id = ctx.params.id;
        if(id){
            try {
                let data = await UserModel.getUserDetails(id);
                ctx.body = {
                    code:"200",
                    message:"查询成功",
                    data
                }
            } catch(err){
                ctx.body = {
                    code:"412",
                    message:"查询失败",
                    data:err
                }
            }
        }else {
            ctx.body = {
                code:"416",
                message:"参数不全",
            }
        }
    }
}

module.exports = userController