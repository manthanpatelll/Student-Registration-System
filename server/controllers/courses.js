const getAllCourses = (req, res) => {
  res.send("All course");
};

const getAllCoursesSorted = (req, res) => {
  res.send("All course sorted");
};

const getSingleCourse = (req, res) => {
  res.send("A course");
};

const CreateCourse = (req, res) => {
  res.send("Posted new course");
};

const EditCourse = (req, res) => {
  res.send("Edit course");
};

const RemoveCourse = (req, res) => {
  res.send("removed course");
};

module.exports = {
  getAllCourses,
  getAllCoursesSorted,
  getSingleCourse,
  CreateCourse,
  EditCourse,
  RemoveCourse,
};
