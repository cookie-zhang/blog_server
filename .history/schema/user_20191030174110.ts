const moment = require('moment');
import { Sequelize } from 'sequelize'
module.exports=(sequelize:Sequelize,DataTypes:any)=>{
    return sequelize.define('admin',{
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
        createdtime:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('createdtime')).format('YYYY-MM-DD HH:mm:ss');
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
