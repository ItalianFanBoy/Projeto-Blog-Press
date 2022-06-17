const expressCategories = require("express");
const router = expressCategories.Router();


router.get("/categories", (req:any, res:any) =>{
    res.send("Rota de categorias")
});

router.get("/admin/categories/new", (req:any, res: any)=>{
    res.send("Rota para criar nova categorria")
})


module.exports = router