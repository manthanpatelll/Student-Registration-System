import { Box } from "@mui/material"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div style={ { width: '100%' } }>
      <Box sx={ {
        display: 'flex',
        flexDirection: 'row',
        bgcolor: 'background.paper',
      } }>

        <Dashboard />
      </Box>
    </div>
  )
}

export default App
