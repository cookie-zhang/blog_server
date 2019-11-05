const db = require('../../config/db');
const Sequelize = db.sequelize;
const admin = Sequelize.import('../schema/user');
const bcrypt = require('bcrypt')
admin.sync({force:false});

class userModel {
    //创建用户
    //密码加密
    static async createUser(data:any){
        return await admin.create({
            name:data.name,
            pass:bcrypt.hashSync(data.pass, 10)
        })
    }
    static async getUserIfo(name:String){
        return await admin.findOne({
            where:{ name }
        })
    }
    static async login(data:any){
        return await admin.findAll({
            where:{ 
                name:data.name,
                pass:data.pass
             }
        })
    }
}
module.exports = userModel;