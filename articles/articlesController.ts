const expressarticles = require("express");
const routerArticles = expressarticles.Router();
const CategoryforArticles = require("../categories/category") 
const ArticlesforMysql =  require("./articles")
const slugfyforArticles =  require("slugify")

routerArticles.get("/articles", (req:any, res:any) =>{
    res.send("Rota de artigos")
});

routerArticles.get("/admin/articles/new", (req:any, res: any)=>{
    CategoryforArticles.fildAll().then((categories:any) =>{
        res.render("admin/articles/new", (categories: categories)}
    })
   
})


routerArticles.post("/articles/save", (req: any, res:any)=>{
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;


    ArticlesforMysql.create({
        title: title,
        slug: slugfyforArticles(title),
        body: body,
        categoryId: category,
    })
})


module.exports = routerArticles