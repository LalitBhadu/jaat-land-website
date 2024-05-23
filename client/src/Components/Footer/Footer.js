import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import BootamFooter from "./BootamFooter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-3">
            <Image
              src="./../assests/02.jpg"
              style={{
                width: "80px",
                display: "inline-flex",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            />
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Jaat raj
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              About Jaat{" "}
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              How Jaat Work
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Help & Support
            </Text>
          </div>
          <div className="col-md-3">
            <Text
              marginLeft="20px"
              fontSize="x-large"
              fontWeight="500"
              textAlign="left"
              cursor="pointer"
            >
              Terms
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Privacy Policy{" "}
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Terms & Conditions
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Copyright Policy
            </Text>
          </div>
          <div className="col-md-3">
            <Text
              marginLeft="20px"
              fontSize="x-large"
              fontWeight="500"
              textAlign="left"
              cursor="pointer"
            >
              Contact Us
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Call: {"99999-99999 "}
            </Text>
            <Text cursor="pointer" marginLeft="20px" textAlign="left">
              Email: {"jaatraj16x8@gmail.com "}
            </Text>
          </div>
          <div className="col-md-3">
            <Text
              marginLeft="20px"
              fontSize="x-large"
              fontWeight="500"
              textAlign="left"
            >
              Social Links
            </Text>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginLeft: "25px",
                cursor: "pointer",
              }}
            >
              <FaFacebook
                style={{
                  width: "30px",
                  height: "30px",
                  color: "blue",
                  cursor: "pointer",
                }}
              />
              <FaInstagramSquare
                style={{
                  width: "30px",
                  height: "30px",
                  color: "hotpink",
                  cursor: "pointer",
                }}
              />
              <FaYoutube
                style={{
                  width: "30px",
                  height: "30px",
                  color: "red",
                  cursor: "pointer",
                }}
              />
              <CiTwitter
                style={{
                  width: "30px",
                  height: "30px",
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <BootamFooter />
    </>
  );
};

export default Footer;
