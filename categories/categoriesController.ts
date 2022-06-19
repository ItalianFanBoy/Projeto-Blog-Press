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

module.exports = router;