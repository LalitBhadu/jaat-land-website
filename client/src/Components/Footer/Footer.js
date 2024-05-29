import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import BootamFooter from "./BootamFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-3">
            <Image
              src="assests/logomain.png"
              style={{
                width: "80px",
                display: "inline-flex",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            />
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
              fontSize="x-large"
            >
              About Jaat
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
              How Jaat Work
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
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
              color="black"
            >
              Terms
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
              Privacy Policy{" "}
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
              Terms & Conditions
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
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
              color="black"
            >
              Contact Us
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
              <strong> Call:</strong> {"95018-05508"}
            </Text>
            <Text
              cursor="pointer"
              marginLeft="20px"
              textAlign="left"
              color="black"
            >
              <strong>Email:</strong> {"info@jaat.info"}
            </Text>
          </div>
          <div className="col-md-3">
            <Text
              marginLeft="20px"
              fontSize="x-large"
              fontWeight="500"
              textAlign="left"
              color="black"
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
              <Link to="">
                <FaFacebook
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <Link to="https://www.instagram.com/jaat.info?igsh=MXFweXg0eGt0Y3ltYw%3D%3D&utm_source=qr">
                <FaInstagramSquare
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "hotpink",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <Link to="http://www.youtube.com/@jaatonkebaareme">
                {" "}
                <FaYoutube
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "red",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BootamFooter />
    </>
  );
};

export default Footer;
