import { useState } from "react"
import CourseList from "../components/courses/CourseList"

const Dashboard = () => {

  const [allCourses, setAllCourses] = useState(false)

  const handleViewAllCourses = () => {
    setAllCourses(false)
  }
  return (
    <div>
      <div>
        <button onClick={ handleViewAllCourses }>VIEW ALL COURSES</button>
      </div>

      <div>
        <button onClick={ handleViewAllCourses }>ENROL TO COURSE</button>
      </div>
      { allCourses && <CourseList /> }
    </div>
  )
}
export default Dashboard