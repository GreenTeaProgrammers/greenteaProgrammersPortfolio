import React from "react";
import { HStack, Img, Text, VStack } from "@chakra-ui/react";

interface WorkDescriptionProps {
  description: string;
  githubRepo?: string;
  descriptionImage?: string;
  imageMaxH?: number;
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({ description, descriptionImage, imageMaxH, githubRepo }) => {
  return (
    <HStack m={5} align="flex-start" spacing={10}>
      <Img src={descriptionImage} maxH={imageMaxH} />
      <VStack align="left">
        <Text mx={3} my={1}>
          {description}
        </Text>
        {githubRepo && (
          <Text mx={3} my={1} color="blue.300">
            <a href={githubRepo} rel="noopener noreferrer">
              GitHub Repository
            </a>
          </Text>
        )}
      </VStack>
    </HStack>
  );
};

export default WorkDescription;
