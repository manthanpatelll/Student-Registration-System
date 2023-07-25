import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 7 } }
          ></IconButton>
          <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
            STUDENT REGISTRATION SYSTEM
          </Typography>
          <Button color="inherit" onClick={ handleLogout }>
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
