const express = require("express");
const router = express.Router();
const {
  register,
  logging,
  getMe,
  logout,
} = require("../controllers/userControllers");
const { checkUser } = require("../middleware/protectRoutes");

router.post("/", register);
router.post("/login", logging);
router.get("/me", checkUser,getMe);


module.exports = router;
