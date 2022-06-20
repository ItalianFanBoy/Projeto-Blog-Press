const expressarticles = require("express");
const routerArticles = expressarticles.Router();
const CategoryforArticles = require("../categories/category") 
const ArticlesforMysql =  require("./articles")
const slugfyforArticles =  require("slugify")

routerArticles.get("/articles", (req:any, res:any) =>{
    ArticlesforMysql.findAll({
        include: [{model: CategoryforArticles}]
    }).then((article: any)=>{
        res.render("admin/articles/index",{articles: article })
    })
});

routerArticles.get("/admin/articles/new", (req:any, res: any)=>{
    CategoryforArticles.fildAll().then((categories:any) =>{
        res.render("admin/articles/new", {categories: categories})
   
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
    }).then(()=>{
        res.redirect("/")
    })
})

router.post("/articles/delete", (req:any, res:any)=>{
    var id:any = req.body.id;
    if(id != undefined){
       if(!isNaN(id)){

        CategorySql.destroy({
            where:{
                id: id,
            }
        }).then(()=>{
            res.redirect("/admin/categories")
        })

    }else{ // nao for or numero
        res.redirect("/admin/articles");
    }

    }else{ // null
        res.redirect("/admin/articles");
    }
});


module.exports = routerArticles