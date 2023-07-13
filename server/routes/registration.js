const express = require("express");
const router = express.Router();

const {
  enrollToCourse,
  unenrollFromCourse,
  getEnrollments,
} = require("../controllers/registration");

router.route("/:course_id/student/:student_id").post(enrollToCourse);
router.route("/:course_id/student/:student_id").delete(unenrollFromCourse);
router.route("/enrollments/courses").get(getEnrollments);

module.exports = router;
