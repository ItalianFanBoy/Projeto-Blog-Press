const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const CategoriesController = require("./categories/categoriesController")
const ArticlesControllers = require("./articles/articlesController")
const ArticlesRelation =  require("./articles/articles");
const CategoriesRelation = require("./categories/category");

//carregar a viw engine

app.set('view engine', 'ejs');


//static
app.use(express.static('public'));

//database
connection
.authenticate()
.then(()=>{
    console.log("Conexão feita com sucesso")
}).catch((error:any)=>{
    console.log("Errou occorreu")
})


app.use("/", CategoriesController);
app.use("/", ArticlesControllers)


// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", (req:any, res :any)=>{
    res.render("index")
})




app.listen(8080, ()=>{
    console.log("Servidor está rodando")
})