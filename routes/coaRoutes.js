const express = require("express");
const {   createCoa, productsMany, getProduct, getAllProducts, getCOAs, getCOA } = require("../controlers/coaControler");

const router = express.Router();

router.route("/coa/create").post(createCoa)
router.route("/many/products").post(productsMany)

router.route("/get/product/:productId").get(getProduct) // search or select form product or coa
router.route("/products").get(getAllProducts) // select product 

router.route("/all-coa").get(getCOAs) //  all
router.route("/coa/:coaId").get(getCOA) // one



module.exports = router;
