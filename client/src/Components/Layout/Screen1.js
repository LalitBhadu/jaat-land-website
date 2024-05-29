import { Box, Button, Center, Text } from "@chakra-ui/react";
import "./screen.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Screen1 = (props) => {
  const slideInRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="content">
      <div className="overlay">
        <div className="text-content">
          <Text
            fontSize="x-large"
            color="white"
            fontFamily="Lemon"
            marginBottom="50px"
          >
            "A People Without the knowledge of their past history, origin and
            culture are like a tree without roots."
          </Text>
          <Text
            fontSize="large"
            color="white"
            fontFamily="Lemon"
            marginBottom="50px"
          >
            अपने अतीत के इतिहास, उत्पत्ति और संस्कृति के ज्ञान के बिना लोग जड़ों
            के बिना एक पेड़ की तरह हैं
          </Text>

          <Button
            colorScheme="pink"
            fontSize="x-large"
            height="40px"
            fontFamily="Lemon"
            as={Link}
            to="/contact-us"
          >
            Click If You are Jaat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
