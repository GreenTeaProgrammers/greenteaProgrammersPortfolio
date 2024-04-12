import { VStack } from "@chakra-ui/react";
import React from "react";
import AboutSection from "@/components/organism/aboutSection";
import MemberSection from "@/components/organism/memberSection";
import WorksSection from "@/components/organism/worksSection";

const HomePage: React.FC = () => {
  return (
    <VStack width="100%">
      <AboutSection />
      <WorksSection />
      <MemberSection />
    </VStack>
  );
};

export default HomePage;