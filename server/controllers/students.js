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
    const { student_email } = req.body;

    // Check if a student with the same email already exists
    const existingStudent = await Student.findOne({
      where: {
        student_email,
      },
    });

    if (existingStudent) {
      return res.status(400).json({ msg: "Email already exists." });
    }

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

const studentLogin = async (req, res) => {
  try {
    const { student_email, student_password } = req.params;

    if (!student_email || !student_password) {
      throw new Error("Student Email or Password cannot be empty");
    }

    const student = await Student.findOne({
      where: {
        student_email,
      },
    });

    if (!student) {
      throw new Error("Student not found");
    }

    console.log(student);

    if (
      student.student_password !== student_password ||
      student.student_email !== student_email
    ) {
      throw new Error("Incorrect email or password");
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error during student login:", error);
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  studentLogin,
};
