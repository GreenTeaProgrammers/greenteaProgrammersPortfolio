import { VStack } from "@chakra-ui/react";
import React from "react";
import AboutSection from "@/components/organism/aboutSection";

const HomePage: React.FC = () => {
  return (
    <VStack width="100%">
      <AboutSection />
    </VStack>
  );
};

export default HomePage;