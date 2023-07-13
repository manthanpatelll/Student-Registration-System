const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getSingleStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/students");

router.route("/").get(getAllStudents);
router.route("/:id").get(getSingleStudent);
router.route("/").post(addStudent);
router.route("/:id").patch(updateStudent);
router.route("/:id").delete(deleteStudent);

module.exports = router;
