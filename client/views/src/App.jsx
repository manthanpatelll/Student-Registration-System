import { Box } from "@mui/material"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
  return (
    <div style={ { width: '100%' } }>
      <Box sx={ {
        display: 'flex',
        flexDirection: 'row',
        bgcolor: 'background.paper',
      } }>

        <Login />
      </Box>
    </div>
  )
}

export default App