import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Modal from "@mui/material/Modal";
// import AddUser from "../Pages/AddUser";
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
//   const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{mr: 2, display: { xs: "none", md: "flex" },fontFamily: "monospace",fontWeight: 700,letterSpacing: ".3rem",color: "inherit",textDecoration: "none"}}>
              USERS INFO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>

                <MenuItem key="add" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Add</Typography>
                </MenuItem>
                <MenuItem key="delete" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Delete</Typography>
                </MenuItem>
                <MenuItem key="remove" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Remove</Typography>
                </MenuItem>

              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{mr: 2,display: { xs: "flex", md: "none" },flexGrow: 1,fontFamily: "monospace",fontWeight: 700,letterSpacing: ".3rem",color: "inherit",textDecoration: "none",}}>
              EMPLOYEE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button key="add"
                // onClick={() => {
                //   navigate('/add')
                // }}
                sx={{ my: 2, color: "white", display: "block" }}
              > Add
              </Button>

              {open ? (
                <>
                  <Modal
                    open="open"
                    onClose={() => {
                      setOpen(false); }}>
                    <Box>
                      <AddUser />
                    </Box>
                  </Modal>
                </>
              ) : (
                <></>
              )}

              <Button
                key="remove"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Remove
              </Button>

              <Button
                key="delete"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Delete
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}