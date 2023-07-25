import { TextField, Button } from "@mui/material"
import { Stack } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"
import LoginImage from "../components/LoginImage"

const Login = () => {

    const [studentEmail, setStudentEmail] = useState("")
    const [studentPassword, setStudentPassword] = useState("")
    const navigate = useNavigate();
    

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.get(`https://student-registration-system-api.onrender.com/api/v1/students/login/${studentEmail}/${studentPassword}`)
                .then((res) => {
                    console.log(res.data)
                    sessionStorage.setItem("student_id", res.data.id)
                    sessionStorage.setItem("student_firstname", res.data.first_name)
                    sessionStorage.setItem("student_lastname", res.data.last_name)
                    sessionStorage.setItem("student_email", res.data.student_email)
                    navigate("/dashboard")
                })
        } catch (error) {
            alert(`${error.response.data.error}`);
            console.log(error.response.data.error);
        }
    }

    return (
        <div className="center">

            <LoginImage />
            <Stack
                component="form"
                onSubmit={ handleOnSubmit }
                sx={ {
                    '& > :not(style)': { m: 1, width: '25ch' },
                } }
                noValidate
                autoComplete="on"
            >
                <TextField id="standard-basic" label="Student Email" type="email" variant="standard" onChange={ (e) => {
                    console.log(e.target.value)
                    setStudentEmail(e.target.value)
                } } />
                <TextField id="standard-basic" label="password" type="password" variant="standard" onChange={ (e) => {
                    console.log(e.target.value)
                    setStudentPassword(e.target.value)
                } } />
                <Button variant="contained" type="submit">Login</Button>
            </Stack>
        </div>
    )
}
export default Login