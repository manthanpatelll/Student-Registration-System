import { useEffect, useState } from "react"
import axios from "axios"
import Courses from "./Courses"
import { Grid } from "@mui/material"

const CourseCatalogue = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get(`https://student-registration-system-api.onrender.com/api/v1/courses`)
            .then((res) => {
                console.log(res.data)
                setCourses(res.data.courses)
            })
    }, [])

    return (
        <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
            { courses.map((course) => {
                return (
                    <Grid item xs={ 2 } sm={ 4 } md={ 4 } key={ course.id }>
                        <Courses course={ course } />
                    </Grid>)
            }) }
        </Grid>
    )
}
export default CourseCatalogue 