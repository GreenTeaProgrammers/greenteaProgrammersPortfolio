import { Flex } from "@chakra-ui/react";
import React from "react";
import Banner from "../atoms/banner";

interface HeaderProps {
    bg: string;
};

const Header: React.FC<HeaderProps> = ({ bg }) => {
    return (
        <>
            <Flex bg={ bg } height="100px" dropShadow="10px">
                <Banner />
            </Flex>
        </>
    );
};

export default Header;