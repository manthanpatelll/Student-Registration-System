const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getSingleStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  studentLogin,
} = require("../controllers/students");

router.route("/").get(getAllStudents);
router.route("/:id").get(getSingleStudent);
router.route("/").post(addStudent);
router.route("/:id").patch(updateStudent);
router.route("/:id").delete(deleteStudent);
router.route('/login/:student_email/:student_password').get(studentLogin);

module.exports = router;
