//module层 查询数据库 并返回数据
import db from '../config/db';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
const Sequelize = db.sequelize;
const admin = Sequelize.import('../schema/user');
import bcrypt from 'bcrypt';
admin.sync({force:false});

class userModel {
    //创建用户
    static async createUser(data:any){
        return await admin.create({
            name:data.name,
            pass: bcrypt.hashSync(data.pass, 10)
        })
    }
    static async getUserIfo(name:String){
        return await admin.findOne({
            where:{ name }
        })
    }
    static async login(data:any){
        return await admin.findOne({
            where:{ 
                name:data.name,
             }
        })
    }
}
module.exports = userModel;