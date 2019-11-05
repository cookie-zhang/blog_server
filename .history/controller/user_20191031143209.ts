//controler层可做数据处理返回到前端，controller层拿到的数据就是已经在modules层已经查出来的数据
const UserModel = require('../modules/user');
import { Context } from 'koa'
const bcrypt = require('bcrypt')

class userController {
    // 创建用户
    static async create(ctx:any){
        let req = ctx.request.body
        if( req.name && req.pass){
            try {
                const query = await UserModel.getUserIfo(req.name)
                if(query){
                    ctx.body = {
                        code: '201',
                        desc: '用户已存在'
                    }
                }else{
                    await UserModel.createUser(req);
                    ctx.body = {
                        code:'200',
                        message:"创建用户成功",
                        userInfo: {
                            name: req.name
                        }
                    }
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

    static async login(ctx:any){
        let req = ctx.request.body
        if(req){
            try {
                let data = await UserModel.login(req); 
                bcrypt.compare(req.pass, data.pass,(err:boolean, res:boolean)=>{
                    if(err){
                //     ctx.body = {
                //         code:"412",
                //         message:"查询失败",
                //         data
                //     }
                    }
                    if(req.name == data.name && res){
                        ctx.body = {
                            code:"200",
                            message:"查询成功",
                            data
                        }
                    }
                })
                // if(req.name == data.name){
                //     ctx.body = {
                //         code:"200",
                //         message:"查询成功",
                //         data
                //     }
                // }else{
                //     ctx.body = {
                //         code:"412",
                //         message:"查询失败",
                //         data
                //     }
                // }
               
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