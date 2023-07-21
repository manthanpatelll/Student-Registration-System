import { TextField, Button } from "@mui/material"
import { Stack } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [studentEmail, setStudentEmail] = useState("")
    const [studentPassword, setStudentPassword] = useState("")
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:3000/api/v1/students/login/${studentEmail}/${studentPassword}`)
            .then((res) => {
                res.data
                console.log(res.data)
                sessionStorage.setItem("student_id", res.data.id)
                sessionStorage.setItem("student_firstname", res.data.first_name)
                sessionStorage.setItem("student_lastname", res.data.last_name)
                sessionStorage.setItem("student_email", res.data.student_email)
                navigate("/dashboard")
            })
            .catch((error) => {
                alert(`${error.response.data.message}`);
                console.log(error.response.data.message);
            });

    }

    return (
        <Stack
            component="form"
            onSubmit={ handleOnSubmit }
            sx={ {
                '& > :not(style)': { m: 1, width: '25ch' },
            } }
            noValidate
            autoComplete="off"
        >

            <TextField id="standard-basic" label="Student Email" variant="standard" onChange={ (e) => {
                console.log(e.target.value)
                setStudentEmail(e.target.value)
            } } />
            <TextField id="standard-basic" label="password" variant="standard" onChange={ (e) => {
                console.log(e.target.value)
                setStudentPassword(e.target.value)
            } } />
            <Button variant="contained" type="submit">Login</Button>
        </Stack>
    )
}
export default Login