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
  Select,
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
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [work, setWork] = useState("");
  const [uplabdi, setUplabdi] = useState("");
  const [chosework, setChosework] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const form = useRef();
  const [isButtonDisabled, setButtonDisabled] = useState(true);

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

  const validateMobile = (value) => {
    const mobilePattern = /^[0-9]{10}$/; // Regular expression for 10-digit mobile number
    return mobilePattern.test(value);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);
    setIsMobileValid(validateMobile(value));
    setButtonDisabled(!validateMobile(value)); // Disable button if mobile number is invalid
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isButtonDisabled) {
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_gv3mrr9",
        "template_zu6jxts",
        form.current,
        "-Q8HqdrUJO54yxSkP"
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
          setWork("");
          setUplabdi("");
          setChosework("");
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
      {/* <Particles
        id={props.id}
        init={particlesLoaded}
        options={particlesConfig}
      /> */}
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
                  src="assests/logomain.png"
                  style={{ width: "100px", height: "auto", marginTop: "100px" }}
                />
              </Link>
            </span>
          </Center>
          <Text
            fontSize="xx-large"
            fontFamily="lemon"
            color="black"
            marginTop="20px"
          >
            Welcome to Jaat Land{" "}
            <Text
              fontSize="large"
              background="hotpink"
              borderRadius="30px"
              fontFamily="lemon"
              color="black"
            >
              "जाटों का इतिहास" किताब में नाम दर्ज करवाने से बस एक कदम दूर
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
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Name
                </FormLabel>
                <Input
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  color="black"
                />
              </FormControl>
              <FormControl id="gotra" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Gotra
                </FormLabel>
                <Input
                  placeholder="Enter Your Gotra"
                  name="gotra"
                  onChange={(e) => setGotra(e.target.value)}
                  value={gotra}
                  color="black"
                />
              </FormControl>
              <FormControl id="village" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Village
                </FormLabel>
                <Input
                  placeholder="Enter Your Village"
                  name="village"
                  onChange={(e) => setVillage(e.target.value)}
                  value={village}
                  color="black"
                />
              </FormControl>
              <FormControl id="dist" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your District
                </FormLabel>
                <Input
                  placeholder="Enter Your District"
                  name="dist"
                  onChange={(e) => setDist(e.target.value)}
                  value={dist}
                  color="black"
                />
              </FormControl>
              <FormControl id="state" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your State
                </FormLabel>
                <Input
                  placeholder="Enter Your State"
                  name="state"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  color="black"
                />
              </FormControl>
              <FormControl id="instagram">
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Instagram ID Link
                </FormLabel>
                <Input
                  placeholder="Enter Your Instagram ID Link"
                  name="instagram"
                  onChange={(e) => setInstagram(e.target.value)}
                  value={instagram}
                  color="black"
                />
              </FormControl>
              <FormControl id="facebook">
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Facebook ID Link
                </FormLabel>
                <Input
                  placeholder="Enter Your Facebook ID Link"
                  name="facebook"
                  onChange={(e) => setFacebook(e.target.value)}
                  value={facebook}
                  color="black"
                />
              </FormControl>
              <FormControl id="whatsapp">
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Whatsapp No
                </FormLabel>
                <Input
                  placeholder="Enter Your Whatsapp No"
                  name="whatsapp"
                  onChange={(e) => setWhatsapp(e.target.value)}
                  value={whatsapp}
                  color="black"
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  Enter Your Mobile
                </FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter Your Mobile"
                  name="mobile"
                  onChange={handleMobileChange}
                  value={mobile}
                  color="black"
                  borderColor={isMobileValid ? "gray.200" : "red.500"}
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  आपको जाट होने पर गर्व क्यूँ हैं
                </FormLabel>
                <Input
                  placeholder="आपको जाट होने पर गर्व क्यूँ हैं"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  color="black"
                />
              </FormControl>
              <FormControl id="work" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  आप क्या काम करते हैं ?
                </FormLabel>
                <Input
                  placeholder="आप क्या काम करते हैं ?"
                  name="work"
                  onChange={(e) => setWork(e.target.value)}
                  value={work}
                  color="black"
                />
              </FormControl>
              <FormControl id="uplabdi" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  आपकी हासिल की उपलब्धियां 
                </FormLabel>
                <Input
                  placeholder="आपकी हासिल की उपलब्धियां "
                  name="uplabdi"
                  onChange={(e) => setUplabdi(e.target.value)}
                  value={uplabdi}
                  color="black"
                />
              </FormControl>
              <FormControl id="chosework" isRequired>
                <FormLabel fontFamily="lemon" color="black">
                  क्या आप इनमें से कोई हैं ?
                </FormLabel>
                <Select
                  placeholder="क्या आप इनमें से कोई हैं ?"
                  name="chosework"
                  onChange={(e) => setChosework(e.target.value)}
                  value={chosework}
                  color="black"
                >
                  <option value="Sportsperson">Sportsperson</option>
                  <option value="Academician">Academician</option>
                  <option value="Soldier">Soldier</option>
                  <option value="Influencer">Influencer</option>
                  <option value="Freedom Fighter">Freedom Fighter</option>
                  <option value="Politician">Politician</option>
                  <option value="Businessman">Businessman</option>
                </Select>
              </FormControl>
              <Button
                marginTop={3}
                width="100%"
                colorScheme="pink"
                type="submit"
                disabled={isButtonDisabled || loading}
              >
                {isButtonDisabled
                  ? `Please fill correct Details`
                  : "Send Email"}
              </Button>
            </form>{" "}
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Contactus;
