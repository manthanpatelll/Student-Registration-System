const db = require("../models");

//Create course model
const Course = db.models.Courses;

//Get all courses {GET}
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();     //From docs model.findall() returns an array of the models 
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Get a course {GET}
const getSingleCourse = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.findOne({ where: { id } });     //from docs model.findone() return the model if condition was met other null
    // console.log({ course });
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
    const course = await Course.create(req.body);       //from docs model.create returns the model 
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateCourse = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.update(req.body, { where: { id } }); //From docs model.update returns an array where the first element is number oif affected rows
    // console.log(course);
    if (course[0] === 0) {
      return res
        .status(200)
        .json({ msg: `Course id ${id} has already been updated` });
    }
    res.status(200).json({ id, data: req.body });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

//Delete course {DELETE}
const deleteCourse = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.destroy({ where: { id } }); //From docs model.destroy returns a number which is the number of rows deleted
    // console.log(course);
    if (course === 0) {
      return res.status(404).json({ msg: `No course with id ${id} ` });
    }
    res.status(200).json({ msg: `Deleted course with id ${id}` });
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
