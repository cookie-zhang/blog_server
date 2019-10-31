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
            type:DataTypes.STRING,
            allowNull:false,
            field:'pass'
        },
        createtime:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('createtime')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedtime:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('updatedtime')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    },{
        freezeTableName:true,
    })
}
