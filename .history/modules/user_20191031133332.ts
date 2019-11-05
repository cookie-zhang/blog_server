const db = require('../../config/db');
const Sequelize = db.sequelize;
const admin = Sequelize.import('../schema/user');

admin.sync({force:false});

class userModel {
    //
    static async createUser(data:any){
        return await admin.create({
            name:data.name,
            pass:data.pass
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