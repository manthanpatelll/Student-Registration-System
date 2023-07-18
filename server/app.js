const express = require("express");
const app = express();
const courses = require("./routes/courses");
const student = require("./routes/students");
const registration = require("./routes/registration");
const notFound = require("./middleware/not_found");
require("dotenv").config();
const cors = require("cors");

//middleware
// app.use(notFound);

app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/courses", courses, registration);
app.use("/api/v1/students", student);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
