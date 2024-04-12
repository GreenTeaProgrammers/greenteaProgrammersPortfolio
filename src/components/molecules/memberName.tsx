import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

interface MemberNameProps {
    name: string,
    githubSrc?: string,
    twitterSrc?: string,
};

const MemberName: React.FC<MemberNameProps> = ({ name, githubSrc, twitterSrc }) => {
    return (
        <HStack align="center">
            <Text fontSize="xl" fontWeight="bold">{ name }</Text>
            { githubSrc && <a href={ githubSrc }><AiFillGithub /></a> }
            { twitterSrc && <a href={ twitterSrc }><AiFillTwitterCircle /></a>}
        </HStack>
    );
}

export default MemberName;