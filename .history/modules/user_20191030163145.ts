const db = require('../../config/db');
const Sequelize = db.sequelize;
const admin = Sequelize.import('../schema/user');
admin.sync({force:false});

class userModel {
    static async createUser(data:any){
        return await admin.create({
            // id:data.id,
            name:data.name,
            age:data.age
        })
    }
    static async getUserDetails(id:Number){
        return await user.findOne({
            where:{ id }
        })
    }
}
module.exports = userModel;