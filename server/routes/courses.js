const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getAllCoursesSorted,
  getSingleCourse,
  CreateCourse,
  EditCourse,
  RemoveCourse,
} = require("../controllers/courses");

router.route("/").get(getAllCourses);
router.route("/").get(getAllCoursesSorted);
router.route("/:id").get(getSingleCourse);
router.route("/").post(CreateCourse);
router.route("/:id").patch(EditCourse);
router.route("/:id").delete(RemoveCourse);

module.exports = router;
