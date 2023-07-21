import { useState } from "react"
import CourseCatalogue from "../components/courses/CourseCatalogue"
import CourseEnrolled from "../components/courses/CourseEnrolled"
import CourseEnrol from "../components/courses/CourseEnrol"
import CoursesDisenrol from "../components/courses/CoursesDisenrol"

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
      <div>
        <button onClick={ handleViewAllCourses }>VIEW ALL COURSES</button>
      </div>

      <div>
        <button onClick={ handleViewRegisteredCourses }>VIEW YOUR COURSES</button>
      </div>

      <div>
        <button onClick={ handleEnrollToCourse }>ENROLL TO COURSE</button>
      </div>

      <div>
        <button onClick={ handleDisenrollFromCourseCourse }>DISENROL FROM COURSE</button>
      </div>
      { viewCourses && <CourseCatalogue /> }
      { yourCourses && <CourseEnrolled /> }
      { enrollCourse && <CourseEnrol /> }
      { disenrollCourse && <CoursesDisenrol /> }
    </div>
  )
}
export default Dashboard