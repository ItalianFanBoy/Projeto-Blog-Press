const expressCategories = require("express");
const router = expressCategories.Router();
const CategorySql = require("./category");
const slugify = require("slugify");

router.get("/admin/categories/new", (req: any, res :any)=>{
    res.render("admin/categories/new");
});


router.post("/categories/save", (req:any, res:any)=>{
    var title = req.body.title;
     if(title != undefined){

        CategorySql.create({
            title: title,
            slug: slugify(title)
        }).then(()=>{
            res.redirect("/");
        })

    }else{
        res.redirect("/admin/categories/new");
    }
});


router.get("/admin/categories", (req: any, res:any)=>{
   CategorySql.findAll().then((categories: any) => {
    res.render("admin/categories/index", {categories: categories})
   })
    
   
})

router.post("/categories/delete", (req:any, res:any)=>{
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
        res.redirect("/admin/categories");
    }

    }else{ // null
        res.redirect("/admin/categories");
    }
});

module.exports = router;