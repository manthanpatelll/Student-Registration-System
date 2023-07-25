import { Box } from "@mui/material"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
// import { Route, Routes } from "react-router-dom"
import { Route, Routes } from "react-router-dom";

function App() {



  return (
    <div style={ { width: '100%' } }>
      <Box>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Box>
    </div>
  )
}

export default App