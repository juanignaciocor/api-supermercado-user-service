const express = require('express');
const authController= require("../controllers/auth.controller")
const router = express.Router();
const authMiddleware= require("../middleware/auth.middleware")

router.post("/login",authController.authenticate)
router.post("/singIn",authController.signUp)

module.exports=router