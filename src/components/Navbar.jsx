// import React from "react";

// const Navbar = () => {
//   return (

//   );
// };

// export default ;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link to="/" style={{ color: "white" }}>
                home
              </Link>
              <Link to="/add" style={{ color: "white" }}>
                add
              </Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
