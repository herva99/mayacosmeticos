const { DataTypes } = require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define("Post",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
        },
        subtitle:{
            type:DataTypes.STRING
        },
        img:{
            type: DataTypes.STRING
        },
        cost:{
            type: DataTypes.INTEGER
        }
    }, {timestamps: false})
}