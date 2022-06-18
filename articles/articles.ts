const SequelizeArticles = require("sequelize");
const connectionArticles = require("../database/database.js");
const Categories = require("../categories/category");

const Articles = connectionArticles.define('articles',{
    title:{
        type: SequelizeArticles.STRING,
        allowNull: false
    },slug:{
        type: SequelizeArticles.STRING,
        allowNull:false,
    }
});

Categories.hasMany(Articles); // uma categoria tem muitos artigos
Articles.belongsTo(Categories); // estou dizendo que um artigo pertence a uma categoria




module.exports = Articles;