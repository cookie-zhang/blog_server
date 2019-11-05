//module层 查询数据库 并返回数据
const pool = require('./pool');
const article = pool.import('../schema/article');
article.sync({ force: false });

class  articleModel{
  //创建文章
  static async createArticle(data: any) {
    return await article.create({
      sort: data.sort,// 分类
      type: data.type,// 类型
      coverImg: data.coverImg,// 封面
      author: data.author,// 作者
      title: data.title,// 标题
      introduce: data.introduce,// 介绍
      content: data.content,// 内容
    })
  }
  static async articleList() {
    return await article.findAll({order: '${}` DESC'})
  }
}
module.exports = articleModel;