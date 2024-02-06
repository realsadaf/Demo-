const express = require("express");
let router = express.Router()
const {homepage, aboutpage, contact} = require("../controller/PageOptions")


router.get("/", homepage)

router.get("/about", aboutpage)

router.get("/contact", contact)


module.exports= router;