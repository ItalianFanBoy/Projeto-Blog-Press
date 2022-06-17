const SequelizeArticles = require("sequelize");
const connectionArticles = require("../database/database.js");


const Articles = connectionArticles.define('articles',{
    title:{
        type: SequelizeArticles.STRING,
        allowNull: false
    },slug:{
        type: SequelizeArticles.STRING,
        allowNull:false,
    }
})

module.exports = Articles;