/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {
  ChecklistOutlined,
  DashboardOutlined,
  FileUploadOutlined,
  LibraryBooksOutlined,
  LocalLibraryOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.navy[500],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.sky[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        // "& .pro-inner-item": {
        //   marginLeft: "-10px !important",
        // },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "0px 0 5px 0",
              color: colors.navy[500],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
            <Box display="flex" justifyContent="center">
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Box>
          </MenuItem>
          {/* Username section with the user role */}
          {!isCollapsed && (
            <Box mb="0 20px">
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  m="5px"
                  fontWeight="bold"
                  color={colors.navy[500]}
                >
                  Share2teach
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.navy[500]}
              sx={{ m: "5px 0 5px 5px" }}
              display={!isCollapsed ? undefined : "none"}
            >
              Go To
            </Typography>
            <Item
              title="Subjects"
              to="/team"
              icon={<LibraryBooksOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Self-Directed Learning"
              to="/contacts"
              icon={<SchoolOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="OER"
              to="/oer"
              icon={<LocalLibraryOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.navy[500]}
              sx={{ m: "5px 0 5px 5px" }}
              display={!isCollapsed ? undefined : "none"}
            >
              Educators
            </Typography>
            <Item
              title="Contribute"
              to="/contribute"
              icon={<FileUploadOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.navy[500]}
              sx={{ m: "5px 0 5px 5px" }}
              display={!isCollapsed ? undefined : "none"}
            >
              Moderators
            </Typography>
            <Item
              title="Moderate"
              to="/moderate"
              icon={<ChecklistOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.navy[500]}
              sx={{ m: "5px 0 5px 5px" }}
              display={!isCollapsed ? undefined : "none"}
            >
              Admins
            </Typography>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<DashboardOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Users"
              to="/users"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage FAQs"
              to="/managefaq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="View Contributors"
              to="/contributors"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Analytics"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
