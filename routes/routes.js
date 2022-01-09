const express = require("express");

const router = express.Router();

// import controller methods
const {
  create,
  getDataById,
  getData,
  deleteData,
  updateData
} = require("../controllers/controllers.js");

router.post("/users", create);
router.route("/:id").get(getDataById);

router.get("/users/all", getData);

router.route("/:id").delete( deleteData);

router.route("/:id").delete( updateData);
module.exports = router;
