import React from "react";
import "./Home.css";
import Navbar from "../Header/Navbar";
import { Box } from "@chakra-ui/react";
import Screen1 from "../Layout/Screen1";
import Screen2 from "../Layout/Screen2";
import Screen3 from "../Layout/Screen3";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Box width="100%" height="auto">
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          bg="rgb(35, 35, 35)"
          zIndex="1000"
        >
          <Navbar />
        </Box>
        <Screen1 id="particles" />
        <Screen2 />
        <Screen3 />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
