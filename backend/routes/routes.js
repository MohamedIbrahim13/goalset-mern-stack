const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const { checkUser } = require("../middleware/protectRoutes");

router
  .route("/")
  .get(checkUser, controllers.getAll)
  .post(checkUser, controllers.setOne);

router
  .route("/:id")
  .put(checkUser, controllers.putOne)
  .delete(checkUser, controllers.removeOne);

module.exports = router;
