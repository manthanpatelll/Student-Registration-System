import { useEffect, useState } from "react"
import axios from "axios"
import CoursesAction from "./CoursesAction"
import { Grid, Typography } from "@mui/material"

const CoursesDisenrol = () => {

    const [courses, setCourses] = useState([])

    const student_id = sessionStorage.getItem("student_id")

    useEffect(() => {
        axios.get(`https://student-registration-system-api.onrender.com/api/v1/courses/studentenrollments/${student_id}`)
            .then((res) => {
                console.log(res.data)
                setCourses(res.data.courses)
            })
    }, [student_id])

    return (
        <div>
            { courses && courses.length > 0 ? (
                <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
                    { courses.map((course) => {
                        return (
                            <Grid item xs={ 2 } sm={ 4 } md={ 4 } key={ course.id }>
                                <CoursesAction course={ { ...course, isEnrolled: true } } />
                            </Grid>)
                    }) }
                </Grid>
            ) : (
                <Typography variant="h6" component="div" sx={ { flexGrow: 1 } } paddingBottom={ "2rem" } textAlign={ "center" }>
                    YOU ARE NOT ENROLLED TO ANY COURSE
                </Typography>
            ) }
        </div>
    );
}
export default CoursesDisenrol