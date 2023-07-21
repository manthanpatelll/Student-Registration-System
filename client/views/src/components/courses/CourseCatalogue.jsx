import { useEffect, useState } from "react"
import axios from "axios"
import Courses from "./Courses"

const CourseCatalogue = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/courses`)
            .then((res) => {
                console.log(res.data)
                setCourses(res.data.courses)
            })
    }, [])

    return (<div>
        { courses.map((course) => {
            return <div key={ course.id }><Courses course={ course } /></div>
        }) }
    </div >
    )
}
export default CourseCatalogue 