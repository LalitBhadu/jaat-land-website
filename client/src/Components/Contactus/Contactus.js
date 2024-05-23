import React, { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "../Layout/particlesConfig.json";
import { loadSlim } from "@tsparticles/slim";
import "./Contactus.css";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Header/Navbar";
import emailjs from "@emailjs/browser";

const Contactus = (props) => {
  const [init, setInit] = useState(false);
  const [name, setName] = useState("");
  const [gotra, setGotra] = useState("");
  const [village, setVillage] = useState("");
  const [dist, setDist] = useState("");
  const [state, setState] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const form = useRef();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(10);

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

  const sendEmail = (e) => {
    e.preventDefault();

    if (isButtonDisabled) {
      return;
    }

    emailjs
      .sendForm(
        "service_3z8e41r",
        "template_ezywdc8",
        form.current,
        "lANXlNTd4kb7eIcDD"
      )
      .then(
        (result) => {
          form.current.reset();
          setButtonDisabled(true);
          setLoading(false);
          toast({
            title: "Email sent.",
            description: "Your email has been sent successfully!",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setName("");
          setGotra("");
          setVillage("");
          setDist("");
          setState("");
          setInstagram("");
          setFacebook("");
          setWhatsapp("");
          setMobile("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          toast({
            title: "Error.",
            description: `An error occurred: ${error.text}`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      </Box>
      <div className="Contactus">
        <Container centerContent marginBottom={3}>
          <Center>
            <span className="navbar-brand">
              <Link to="/">
                <img
                  src="assests/02.jpg"
                  style={{ width: "100px", height: "auto" }}
                />
              </Link>
            </span>
          </Center>
          <Text fontSize="xx-large" fontFamily="Work sans" color="white">
            Welcome to Jaat Land{" "}
            <Text fontSize="large" background="hotpink" borderRadius="30px">
              जाट भूमि से बस एक कदम दूर
            </Text>
          </Text>
          <Box
            p={3}
            width="100%"
            border="1px solid #e2e8f0"
            borderRadius="10px"
            borderWidth="1px"
          >
            <form ref={form} onSubmit={sendEmail}>
              <FormControl id="name" isRequired>
                <FormLabel>Enter Your Name</FormLabel>
                <Input
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </FormControl>
              <FormControl id="gotra" isRequired>
                <FormLabel>Enter Your Gotra</FormLabel>
                <Input
                  placeholder="Enter Your Gotra"
                  name="gotra"
                  onChange={(e) => setGotra(e.target.value)}
                  value={gotra}
                />
              </FormControl>
              <FormControl id="village" isRequired>
                <FormLabel>Enter Your Village</FormLabel>
                <Input
                  placeholder="Enter Your Village"
                  name="village"
                  onChange={(e) => setVillage(e.target.value)}
                  value={village}
                />
              </FormControl>
              <FormControl id="dist" isRequired>
                <FormLabel>Enter Your District</FormLabel>
                <Input
                  placeholder="Enter Your District"
                  name="dist"
                  onChange={(e) => setDist(e.target.value)}
                  value={dist}
                />
              </FormControl>
              <FormControl id="state" isRequired>
                <FormLabel>Enter Your State</FormLabel>
                <Input
                  placeholder="Enter Your State"
                  name="state"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                />
              </FormControl>
              <FormControl id="instagram" isRequired>
                <FormLabel>Enter Your Instagram ID Link</FormLabel>
                <Input
                  placeholder="Enter Your Instagram ID Link"
                  name="instagram"
                  onChange={(e) => setInstagram(e.target.value)}
                  value={instagram}
                />
              </FormControl>
              <FormControl id="facebook" isRequired>
                <FormLabel>Enter Your Facebook ID Link</FormLabel>
                <Input
                  placeholder="Enter Your Facebook ID Link"
                  name="facebook"
                  onChange={(e) => setFacebook(e.target.value)}
                  value={facebook}
                />
              </FormControl>
              <FormControl id="whatsapp" isRequired>
                <FormLabel>Enter Your Whatsapp No</FormLabel>
                <Input
                  placeholder="Enter Your Whatsapp No"
                  name="whatsapp"
                  onChange={(e) => setWhatsapp(e.target.value)}
                  value={whatsapp}
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Enter Your Mobile</FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter Your Mobile"
                  name="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>आपको जाट होने पर गर्व क्यूँ हैं</FormLabel>
                <Input
                  placeholder="आपको जाट होने पर गर्व क्यूँ हैं"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </FormControl>

              <Button
                marginTop={3}
                width="100%"
                colorScheme="pink"
                type="submit"
                disabled={isButtonDisabled || loading}
              >
                {isButtonDisabled ? `Sending...)` : "Send Email"}
              </Button>
            </form>{" "}
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Contactus;
