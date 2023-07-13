const db = require("../models");

//Create course model
const Course = db.models.Courses;

//Get all courses {GET}
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Get a course {GET}
const getSingleCourse = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.findOne({ where: { id } });
    console.log(course);
    if (course === null) {
      return res.status(404).json({ msg: `No course with id ${id} ` });
    }
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Create course {POST}
const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateCourse = async (req, res) => {
  let id = req.params.id;

  if (req.params.id) {
    const course = await Course.update(req.body, { where: { id } });
    return res.status(200).json(course);
  } else {
    return res.status(400).json({ msg: "invalid course id" });
  }
};

//Delete course {DELETE}
const deleteCourse = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.destroy({ where: { id } });
    console.log(course);
    if (course === 0) {
      return res.status(404).json({ msg: `No course with id ${id} ` });
    }
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllCourses,
  getSingleCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
