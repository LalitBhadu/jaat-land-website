import { Text } from "@chakra-ui/react";
import React from "react";

const BootamFooter = () => {
  return (
    <>
      <div className="footer">
        <div
          className="row"
          style={{ width: "100%", borderTop: "1px solid black" }}
        >
          <div className="col-md-12">
            <Text color="black" fontWeight="600">
              Copyright © 2024 jaat.Info{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootamFooter;
