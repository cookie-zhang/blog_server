const db = require('../../config/db');
const Sequelize = db.sequelize;
const admin = Sequelize.import('../schema/user');
const bcrypt = require('bcrypt')
admin.sync({force:false});

class userModel {
    static async createUser(data:any){


        return await admin.create({
            name:data.name,
            pass:bcrypt.hashSync(data.pass, 10)
        })
    }
    static async getUserDetails(id:Number){
        return await admin.findOne({
            where:{ id }
        })
    }
}
module.exports = userModel;