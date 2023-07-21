import { useEffect, useState } from "react"
import axios from "axios"
import CoursesAction from "./CoursesAction"

const CoursesDisenrol = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/courses/studentenrollments/1`)
            .then((res) => {
                console.log(res.data)
                setCourses(res.data.courses)
                // console.log(courses.lengthå)
            })
    }, [])

    return (
        <div>
            { courses && courses.length > 0 ? (
                courses.map((course) => (
                    <div key={ course.id }><CoursesAction course={ { ...course, isEnrolled: true } } /></div>
                ))
            ) : (
                <div>
                    <p>Student is not enrolled in any course.</p>
                </div>
            ) }
        </div>
    );
}
export default CoursesDisenrol