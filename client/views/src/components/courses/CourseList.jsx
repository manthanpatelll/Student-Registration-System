import { useEffect, useState } from "react"
import Courses from "./Courses"

const CourseList = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/courses`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.courses)
                setCourses(data.courses)
            })
    }, [])


    return (<div>
        { courses.map((course) => {
            return <h1 key={ course.id }><Courses course={ course } /></h1>
        }) }
    </div >
    )
}
export default CourseList 