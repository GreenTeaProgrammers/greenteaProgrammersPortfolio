import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Banner from "../atoms/banner";
import HeaderLinks from "../molecules/headerLinks";

interface HeaderProps {
    bg: string;
    height?: string;
};

const Header: React.FC<HeaderProps> = ({ bg, height = "100px" }) => {
    return (
        <>
            <Flex bg={ bg } height={ height } width="100%">
                <Banner />
                <Spacer />
                <HeaderLinks />
            </Flex>
        </>
    );
};

export default Header;