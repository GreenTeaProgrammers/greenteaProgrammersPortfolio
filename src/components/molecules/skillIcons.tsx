import React from "react";
import { Flex, Img } from "@chakra-ui/react";

interface SkillIconsProps {
  px?: number;
  skills: string[];
}

const SkillIcons: React.FC<SkillIconsProps> = ({ skills, px = 0 }) => {
  return (
    <Flex align="left" px={px}>
      <Img src={"https://skillicons.dev/icons?i=" + skills} />
    </Flex>
  );
};

export default SkillIcons;
