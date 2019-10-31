const moment = require('moment');
import { Sequelize } from 'sequelize'
module.exports=(sequelize:Sequelize,DataTypes:any)=>{
    return sequelize.define('admin',{
        // id:{
        //     type:DataTypes.INTEGER,
        //     primaryKey:true,
        //     allowNull:false,
        // },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'name'
        },
        pass:{
            type:DataTypes.INTEGER,
            allowNull:false,
            field:'pass'
        },
        createtime:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('createtime')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // updatedAt:{
        //     type:DataTypes.DATE,
        //     get(this:any){
        //         return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        //     }
        // },
    },{
        freezeTableName:true,
    })
}
