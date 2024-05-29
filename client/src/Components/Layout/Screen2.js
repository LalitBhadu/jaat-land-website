import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import { FaArrowRight } from "react-icons/fa";

const Screen2 = () => {
  const Button = styled.button`
    padding: 10px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    height: 55px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;

  return (
    <>
      <div className="screen2">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-6">
            <Button fontFamily="Lemon">Make It Real </Button>
            <Text
              fontWeight="900"
              fontSize="x-large"
              textAlign="center"
              color="black"
              fontFamily="Lemon"
            >
              Jaat{" "}
            </Text>
            <div className="row">
              <div className="col-md-12">
                <Text
                  fontWeight="600"
                  fontSize="large"
                  color="black"
                  fontFamily="Lemon"
                >
                  Any Society is unable to maintain existence without preserving
                  its history.
                </Text>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="assests/jaat 2.jpg"
              style={{ width: "100%", margin: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen2;
