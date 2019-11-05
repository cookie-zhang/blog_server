//module层 查询数据库 并返回数据
const db = require('../../config/db');
const Sequelize = db.sequelize;
const admin = Sequelize.import('../schema/user');
const bcrypt = require('bcrypt')
admin.sync({ force: false });

class  createArticleModel{
  //创建用户
  static async createArticle(data: any) {
    return await admin.create({
      name: data.name,
      pass: bcrypt.hashSync(data.pass, 10)
    })
  }
  static async getArticleIfo(name: String) {
    return await admin.findOne({
      where: { name }
    })
  }
}
module.exports = createArticleModel;