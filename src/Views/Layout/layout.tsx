import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/sidebar";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const handleDrawerClose = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Box className="mainDiv" style={{ display: "flex" }}>
      <Box>
        {isAuthenticated && (
          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        )}
      </Box>
        <Outlet />
    </Box>
  );
};

export default Layout;
