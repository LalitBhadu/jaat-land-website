import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Header/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useRef, useState } from "react";
import particlesConfig from "./../Layout/particlesConfig.json";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
import Footer from "../Footer/Footer";

const Gotars = (props) => {
  const [init, setInit] = useState(false);
  const slideInRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles
        id={props.id}
        init={particlesLoaded}
        options={particlesConfig}
      />
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        bg="rgb(35, 35, 35)"
        zIndex="1000"
      >
        <Navbar />
      </Box>{" "}
      <div className="screen2">
        <div
          className="row"
          style={{ width: "100%", borderBottom: "1px solid white" }}
        >
          <Text marginTop="20px" fontWeight="600" fontSize="xx-large">
            Gotars data for Jaat
          </Text>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gotars;
