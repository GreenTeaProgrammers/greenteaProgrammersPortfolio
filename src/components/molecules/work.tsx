import React from "react";
import { HStack, Img, VStack, Text } from "@chakra-ui/react";
import WorkDescription from "./workDescription";
import SkillIcons from "./skillIcons";

interface WorkProps {
  src?: string;
  alt?: string;
  iconMaxH?: number;
  title: string;
  description: string;
  descriptionImage?: string;
  descriptionImageMaxH?: number;
  githubRepo?: string;
  skills?: string[];
}

const Work: React.FC<WorkProps> = ({
  src = "https://via.placeholder.com/150",
  alt = "image",
  iconMaxH = 200,
  title,
  description,
  descriptionImage,
  descriptionImageMaxH,
  githubRepo,
  skills,
}) => {
  return (
    <VStack border="1px solid #ccc" align="left" my={5} p={5}>
      <HStack p={5} align="center" maxW="100%" spacing={10}>
        <Img src={src} alt={alt} maxH={iconMaxH} />
        <Text fontSize="5xl" fontWeight="bold">
          {title}
        </Text>
      </HStack>
      <WorkDescription
        description={description}
        descriptionImage={descriptionImage}
        imageMaxH={descriptionImageMaxH}
        githubRepo={githubRepo}
      />
      <Text fontSize="2xl" fontWeight="bold" p={3}>
        技術スタック
      </Text>
      {skills ? <SkillIcons skills={skills} px={5} /> : undefined}
    </VStack>
  );
};

export default Work;
