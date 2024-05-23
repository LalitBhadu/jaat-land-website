import { Box, Button, Center, Text } from "@chakra-ui/react";
import "./screen.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useRef, useState } from "react";
import particlesConfig from "./particlesConfig.json";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  IoMdCheckmarkCircle,
  IoMdCheckmarkCircleOutline,
  IoMdSettings,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Screen1 = (props) => {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optional: stop observing after the first reveal
          }
        });
      },
      { threshold: 0.1 } // Adjust this value to control when the image slides in
    );

    if (slideInRef.current) {
      observer.observe(slideInRef.current);
    }

    return () => {
      if (slideInRef.current) {
        observer.unobserve(slideInRef.current);
      }
    };
  }, []);

  return (
    <>
      <Particles
        id={props.id}
        init={particlesLoaded}
        options={particlesConfig}
      />

      <div className="content">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-6">
            <Text fontSize="xx-large" textAlign="center" marginTop="50px">
              "A People Without the knowledge of their past history, origin and
              culture are like a tree without roots."
            </Text>

            <Button
              colorScheme="pink"
              marginRight={1}
              fontSize="x-large"
              height="40px"
              marginBottom={3}
              as={Link}
              to="/contact-us"
            >
              Click If You are Jaat
            </Button>
          </div>
          <div className="col-md-6 slide-in-container" ref={slideInRef}>
            <img
              className={`slide-in-image ${isVisible ? "slide-in" : ""}`}
              style={{ width: "100%", margin: "10px", height: "100%" }}
              src="assests/jaat1.jpg"
              alt="Slide In Example"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen1;
