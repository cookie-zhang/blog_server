const db = require('../../config/db');
const Sequelize = db.sequelize;
const user = Sequelize.import('../schema/user');
user.sync({force:false});

class userModel {
    static async createUser(data:any){
        return await user.create({
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