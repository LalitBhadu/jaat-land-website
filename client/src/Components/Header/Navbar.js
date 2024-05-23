import React, { useState } from "react";
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
              <img src="./../assests/02.jpg" alt="Logo" />
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
          >
            <TiThMenu />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="navbar-nav me-auto mb-1 mb-lg-0">
              <span className="nav-item">
                <Menu>
                  <MenuButton colorScheme="" as={Button}>
                    Home
                  </MenuButton>
                </Menu>
              </span>
              <span className="nav-item">
                <Menu>
                  <Link to="/about-us">
                    {" "}
                    <MenuButton colorScheme="" as={Button}>
                      About Jaat
                    </MenuButton>
                  </Link>
                </Menu>
              </span>
              <span className="nav-item">
                <Menu>
                  <Link to="/history-jaat">
                    <MenuButton colorScheme="" as={Button}>
                      Jaat History
                    </MenuButton>
                  </Link>
                </Menu>
              </span>
              <span className="nav-item">
                <Menu>
                  <Link to="/gotars-jaat">
                    <MenuButton colorScheme="" as={Button}>
                      Gotrast
                    </MenuButton>
                  </Link>
                </Menu>
              </span>
            </span>
            <form className="d-flex" role="search">
              <span className="nav-item">
                <span className="nav-link">
                  <Button as={Link} to="/" colorScheme="pink">
                    Jaat Shop{" "}
                    <TbMoustache
                      style={{
                        width: "60px",
                        height: "40px",
                        marginTop: "5px",
                        color: "black",
                      }}
                    />
                  </Button>
                </span>
              </span>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
