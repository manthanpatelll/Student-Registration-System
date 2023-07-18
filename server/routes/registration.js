const express = require("express");
const router = express.Router();

const {
  enrollToCourse,
  unenrollFromCourse,
  getEnrollments,
  getStudentEnrollments
} = require("../controllers/registration");

router.route("/:course_id/student/:student_id").post(enrollToCourse);
router.route("/:course_id/student/:student_id").delete(unenrollFromCourse);
router.route("/enrollments/courses").get(getEnrollments);
router.route("/studentenrollments/:student_id").get(getStudentEnrollments);

module.exports = router;
