const expressarticles = require("express");
const routerArticles = expressarticles.Router();


routerArticles.get("/articles", (req:any, res:any) =>{
    res.send("Rota de artigos")
});

routerArticles.get("/admin/articles/new", (req:any, res: any)=>{
    res.send("Rota para criar nova categorria")
})


module.exports = routerArticles