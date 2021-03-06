//数据映射
const moment = require('moment')
import { Sequelize } from 'sequelize'
module.exports=(sequelize:Sequelize,DataTypes:any)=>{
    return sequelize.define('article',{
        sort:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'sort'
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'type'
        },
        coverImg:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'coverImg'
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'author'
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'title'
        },
        introduce:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'introduce'
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'content'
        },
        createdAt:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    },{
        freezeTableName:true,
    })
}
