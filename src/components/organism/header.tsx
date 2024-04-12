import { Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import Banner from "../atoms/banner";
import HeaderLinks from "../molecules/headerLinksContainer";

interface HeaderProps {
  bg: string;
  height?: string;
}

const Header: React.FC<HeaderProps> = ({ bg, height = "100px" }) => {
  return (
    <>
      <HStack bg={bg} height={height} width="100%" align="center" position="fixed" top={0}>
        <Banner />
        <Spacer />
        <HeaderLinks />
      </HStack>
    </>
  );
};

export default Header;
