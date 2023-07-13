const express = require("express");
const app = express();
const courses = require("./routes/courses");

app.get("/", (req, res) => {
  console.log("made a request");
  res.status(200).send("Course Registration");
});

//middleware
app.use(express.json());

app.use("/api/v1/courses", courses);

//Routes
/**
 * Get all courses {Get}
 * Get all courses sorted by name {Get}
 * Get course by name {Get}
 * Create new course {Post}
 * Edit course name {PUT}
 * Remove course {Delete}
 * Student register {}
 * Student deregister {}
 */

const port = 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
