import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography sx={{ color: "white", textDecoration: "none" }}>
              {" "}
              Home
            </Typography>
          </Link>

          <Link to="/add">
            <Typography sx={{ ml: 2, color: "white", textDecoration: "none" }}>
              {" "}
              Add Contact
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
