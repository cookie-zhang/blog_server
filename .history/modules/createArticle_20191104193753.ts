//module层 查询数据库 并返回数据
const db = require('../../config/db');
const Sequelize = db.sequelize;
const createArticle = Sequelize.import('../schema/createArticle');
admin.sync({ force: false });

class  createArticleModel{
  //创建用户
  static async createArticle(data: any) {
    return await createArticle.create({
      
    })
  }
  static async getArticleIfo(name: String) {
    return await createArticle.findOne({
      where: { name }
    })
  }
}
module.exports = createArticleModel;