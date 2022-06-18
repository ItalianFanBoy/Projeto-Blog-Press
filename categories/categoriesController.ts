const expressCategories = require("express");
const router = expressCategories.Router();

router.get("/admin/categories/new", (req: any, res :any)=>{
    res.render("admin/categories/new")
});


module.exports = router