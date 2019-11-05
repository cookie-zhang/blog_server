//module层 查询数据库 并返回数据
const db1 = require('../../config/db');
const Sequelize = db.sequelize;
const createArticle = Sequelize.import('../schema/createArticle');
admin.sync({ force: false });

class createArticleModel {
  //创建用户
  static async createArticle(data: any) {
    return await createArticle.create({
      sort: data.sort,// 分类
      type: data.type,// 类型
      coverImg: data.coverImg,// 封面
      author: data.author,// 作者
      title: data.title,// 标题
      introduce: data.introduce,// 介绍
      content: data.content,// 内容
    })
  }
  static async getArticleIfo(id: String) {
    return await createArticle.findOne({
      where: { id }
    })
  }
}
module.exports = createArticleModel;