const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getSingleCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

router.route("/").get(getAllCourses);
router.route("/:id").get(getSingleCourse);
router.route("/").post(addCourse);
router.route("/:id").patch(updateCourse);
router.route("/:id").delete(deleteCourse);



module.exports = router;
