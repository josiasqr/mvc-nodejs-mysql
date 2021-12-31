const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.get("/", EmployeeController.index);
router.post("/create", EmployeeController.create);
router.get("/:id", EmployeeController.edit);
router.put("/:id", EmployeeController.update);
router.delete("/:id", EmployeeController.remove);

module.exports = router;
