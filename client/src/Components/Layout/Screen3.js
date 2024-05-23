import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Screen3 = () => {
  return (
    <>
      <div className="screen3">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-6">
            <img src="assests/jaat 2.jpg" className="img-adjusts" />
          </div>
          <div className="col-md-6">
            <Text fontSize="xx-large" textAlign="center" marginTop="30px">
              हाम बनाने लागरे हा जाट की सबसे बड़ी डाइरेक्टरी <br />
              English & Hind
            </Text>
            <Link to="/contact-us">
              {" "}
              <Button colorScheme="pink">Click If You are Jaat</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen3;
