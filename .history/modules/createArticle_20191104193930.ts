//module层 查询数据库 并返回数据
const db = require('../../config/db');
const Sequelize = db.sequelize;
const createArticle = Sequelize.import('../schema/createArticle');
admin.sync({ force: false });

class  createArticleModel{
  //创建用户
  static async createArticle(data: any) {
    return await createArticle.create({
      sort: data.sort,
      type: data.type,
      coverImg: data.coverImg,
      author: data.author,
      title: data.title,
      introduce: data.introduce,
      content: data.content,
      createdAt: data.createdAt,
      name: data.name,
      name: data.name,
    })
  }
  static async getArticleIfo(id: String) {
    return await createArticle.findOne({
      where: { id }
    })
  }
}
module.exports = createArticleModel;