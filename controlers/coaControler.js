const ContactDB = require("../models/contactModel.js");
const ProductDB = require("../models/productModal.js");
const CoaDB = require("../models/coaModal.js");
const Errorhandler = require("../utils/errorhandler.js");
const catchAsyncError = require("../middleWare/catchAsyncError.js");
const sendEmail = require("../utils/Email.js");
// const cloudinary = require("cloudinary")

exports.createCoa = catchAsyncError(async (req, res, next) => {

  // console.log(req.body)

  const coa = await CoaDB.create(req.body);


  res.status(201).json({
    success: true,
    message: "Data Submit successfully",
    coa,

  });
});

exports.productsMany = catchAsyncError(async (req, res, next) => {


  const products = await ProductDB.insertMany(req.body);

  const total = products.length

  res.status(201).json({
    success: true,
    message: "Data Submit successfully",
    products,
    total

  });
});

exports.getProduct = catchAsyncError(async (req, res, next) => {

  let product = '';
  let productId = '';
  
  product = await CoaDB.find({ productId: req.params.productId }).sort({ Date: -1 })

  if(product.length > 0){
    product = product[0]
    productId = product?.productId 
    console.log('CoaDB',productId)
  }
  else{
    product = await ProductDB.findById(req.params.productId);
    productId = product._id
    console.log('ProductDB',productId)
  }

  res.status(201).json({
    success: true,
    message: "Data Submit successfully",
    product,
    productId
  });
});

exports.getCOAs = catchAsyncError(async (req, res, next) => {


  // const coas = await CoaDB.find({});


  const { keyword, page } = req.query;

  const resultPerPage = 10;
  let totalCoa = null

  // const userId = req.params.id;
  const currentPage = Number(page) || 1;
  const skip = resultPerPage * (currentPage - 1);

  const allField = ["NAME", "name"];

  let allFieldsObj = [];

  allField.forEach(element => {
    const obj = {};
    obj[`${element}`] = {
      $regex: keyword,
      $options: "i",
    };
    allFieldsObj.push(obj);
  });

  const keywordData = keyword
    ? {
      "$or": allFieldsObj
    }
    : "";

  let coas = []

  if (keywordData !== "") {
    totalCoa = await CoaDB.find(keywordData).count()
    coas = await CoaDB.find(keywordData).limit(resultPerPage).skip(skip).sort({ createAt: -1 });
  } else {
    totalCoa = await CoaDB.find().count()
    coas = await CoaDB.find().limit(resultPerPage).skip(skip).sort({ createAt: -1 });
  }

  res.status(201).json({
    success: true,
    message: "Data Submit successfully",
    coas,
    totalCoa,
    resultPerPage
  });
});

exports.getCOA = catchAsyncError(async (req, res, next) => {


  const coa = await CoaDB.findById(req.params.coaId);

  res.status(201).json({
    success: true,
    message: "Data Submit successfully",
    coa
  });
});


exports.getAllProducts = catchAsyncError(async (req, res, next) => {


  const products = await ProductDB.find({});

  res.status(201).json({
    success: true,
    message: "Data Submit successfully",
    products
  });
});


