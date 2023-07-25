import { useState } from "react"
import CourseCatalogue from "../components/courses/CourseCatalogue"
import CourseEnrolled from "../components/courses/CourseEnrolled"
import CourseEnrol from "../components/courses/CourseEnrol"
import CoursesDisenrol from "../components/courses/CoursesDisenrol"
import { Grid, Stack, Typography } from "@mui/material"
import Navbar from "../components/Navbar"

const Dashboard = () => {

  const [viewCourses, setViewCourses] = useState(false)
  const [yourCourses, setYourCourses] = useState(false)
  const [enrollCourse, setEnrollCourse] = useState(false)
  const [disenrollCourse, setDisenrollCourse] = useState(false)


  const handleViewAllCourses = () => {
    setViewCourses(true)
    setYourCourses(false)
    setEnrollCourse(false)
    setDisenrollCourse(false)
  }

  const handleViewRegisteredCourses = () => {
    setYourCourses(true)
    setViewCourses(false)
    setEnrollCourse(false)
    setDisenrollCourse(false)
  }

  const handleEnrollToCourse = () => {
    setEnrollCourse(true)
    setViewCourses(false)
    setYourCourses(false)
    setDisenrollCourse(false)
  }

  const handleDisenrollFromCourseCourse = () => {
    setDisenrollCourse(true)
    setViewCourses(false)
    setYourCourses(false)
    setEnrollCourse(false)
  }
  return (
    <div>
      <Navbar />
      <Grid container height={ "80vh" } alignItems={ "center" }>
        <Grid item xs={ 6 }>
          <div style={ { display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" } }>

            <Typography variant="h5" component="div" sx={ { flexGrow: 1 } } paddingBottom={"2rem"}>
              Welcome { sessionStorage.getItem("student_firstname") + " " }
              { sessionStorage.getItem("student_lastname") }
            </Typography>
            <Stack spacing={ 3 }>

              <button onClick={ handleViewAllCourses }>VIEW ALL COURSES</button>
              <button onClick={ handleViewRegisteredCourses }>VIEW YOUR COURSES</button>
              <button onClick={ handleEnrollToCourse }>ENROLL TO COURSE</button>
              <button onClick={ handleDisenrollFromCourseCourse }>DISENROL FROM COURSE</button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={ 6 }>
          <div style={ { justifyContent: 'center', alignItems: "center" } }>
            { viewCourses && <CourseCatalogue /> }
            { yourCourses && <CourseEnrolled /> }
            { enrollCourse && <CourseEnrol /> }
            { disenrollCourse && <CoursesDisenrol /> }
          </div>

        </Grid>
      </Grid>
    </div>

  )
}
export default Dashboard