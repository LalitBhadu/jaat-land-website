import React from "react";
import "./Navbar.css";
import { Box, Button, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { TbMoustache } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ background: "black" }}
      >
        <div className="container-fluid">
          <span className="navbar-brand">
            <Link to="/">
              <img src="assests/logomain.png" alt="Logo" />
            </Link>
          </span>
          <form className="d-flex mobile" role="search">
            <span className="nav-item">
              <span className="nav-link">
                <Link
                  to="https://open.spotify.com/playlist/6aQ7ITFaf5hQwp9hGvR3JF?si=gblr72OHR_m7mYGyl7C5bw&pi=jyJDy81JRRqB-"
                  target="_blank"
                >
                  <Button colorScheme="pink">
                    Listen to New Jaat Songs
                    <TbMoustache
                      style={{
                        width: "60px",
                        height: "40px",
                        marginTop: "5px",
                        color: "black",
                      }}
                    />
                  </Button>
                </Link>
              </span>
            </span>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
