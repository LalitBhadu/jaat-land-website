import { Text } from "@chakra-ui/react";
import React from "react";

const BootamFooter = () => {
  return (
    <>
      <div className="footer">
        <div
          className="row"
          style={{ width: "100%", borderTop: "1px solid white" }}
        >
          <div className="col-md-12">
            <Text></Text>
            <Text>Copyright © 2024 </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootamFooter;
