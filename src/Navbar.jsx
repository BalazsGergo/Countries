import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link id="navText" to="home" smooth={true} duration={200}>
              The countries of the world
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}