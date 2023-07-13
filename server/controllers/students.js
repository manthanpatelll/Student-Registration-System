const db = require("../models");

const Student = db.models.Students;

const getAllStudents = async (req, res) => {
  try {
    let students = await Student.findAll();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const id = req.params.id;
    let student = await Student.findOne({ where: { id } });
    if (student === null) {
      return res.status(404).json({ msg: `No student id ${id}` });
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addStudent = async (req, res) => {
  try {
    let student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: "all fields must be filled" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    let student = await Student.update(req.body, { where: { id } });
    if (student[0] === 0) {
      return res
        .status(200)
        .json({ msg: `Student id ${id} has already been updated` });
    }
    res.status(200).json({ id, data: req.body });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    let student = await Student.destroy({ where: { id } });
    if (student === 0) {
      return res.status(404).json({ msg: `No student with id ${id}` });
    }
    res.status(200).json({ msg: `Deleted student with id ${id}` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
