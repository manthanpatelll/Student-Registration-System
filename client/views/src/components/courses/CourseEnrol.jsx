import { useEffect, useState } from "react"
import axios from "axios"
import CoursesAction from "./CoursesAction"

const CourseEnrol = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/courses`)
      .then((res) => {
        console.log(res.data)
        setCourses(res.data.courses)
      })
  }, [])


  return (<div>
    {
      (courses.map((course) => {
        return <div key={ course.id }><CoursesAction course={ { ...course, isEnrolled: false } } /></div>
      })) }
  </div >
  )
}
export default CourseEnrol