const SequelizeCategory = require("sequelize");
const connectionCategory = require("../database/database.js");


const Category = connectionCategory.define('categorias',{
    title:{
        type: SequelizeCategory.STRING,
        allowNull: false
    },slug:{
        type: SequelizeCategory.STRING,
        allowNull:false,
    }
})

module.exports = Category;