const moment = require('moment');
import { Sequelize } from 'sequelize'
module.exports=(sequelize:Sequelize,DataTypes:any)=>{
    return sequelize.define('admin',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:true,
            autoIncrement: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'name'
        },
        pass:{
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
