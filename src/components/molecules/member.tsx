import { Avatar, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import ProfileLinks from "./profileLinks";

interface MemberProps {
  name: string;
  description: string;
  avatarSrc?: string;
  githubSrc?: string;
  twitterSrc?: string;
}

const Member: React.FC<MemberProps> = ({ name, description, githubSrc, twitterSrc, avatarSrc }) => {
  return (
    <HStack p={5} border="1px solid #ccc" my={3} align="flex-start" maxW="100%">
      <Avatar src={avatarSrc} size="lg" name={name} />
      <VStack align="left" px={5}>
        <ProfileLinks name={name} githubSrc={githubSrc} twitterSrc={twitterSrc} />
        <p>{description}</p>
      </VStack>
    </HStack>
  );
};

export default Member;
