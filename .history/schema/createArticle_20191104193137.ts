//数据映射
const moment = require('moment');
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
            field:'pass'
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'pass'
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'pass'
        },
        introduce:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'pass'
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'pass'
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
