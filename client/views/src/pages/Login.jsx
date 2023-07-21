import { TextField, Button } from "@mui/material"
import { Stack } from "@mui/system"

const Login = () => {
    return (
        <Stack
            component="form"
            sx={ {
                '& > :not(style)': { m: 1, width: '25ch' },
            } }
            noValidate
            autoComplete="off"
        >

            <TextField id="standard-basic" label="Student Email" variant="standard" />
            <TextField id="standard-basic" label="password" variant="standard" />
            <Button variant="contained">Login</Button>
        </Stack>
    )
}
export default Login