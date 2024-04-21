import React from "react";
import { HStack, Img, Text, VStack } from "@chakra-ui/react";

interface WorkDescriptionProps {
  description: string;
  githubRepo?: string;
  youtubeSrc?: string;
  descriptionImage?: string;
  eventSrc?: string;
  imageMaxH?: number;
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({
  description,
  descriptionImage,
  youtubeSrc,
  eventSrc,
  imageMaxH,
  githubRepo,
}) => {
  return (
    <HStack m={5} align="flex-start" spacing={10}>
      <Img src={descriptionImage} maxH={imageMaxH} />
      <VStack align="left">
        <Text mx={3} my={1}>
          {description}
        </Text>
        {youtubeSrc && (
          <Text mx={3} my={1} color="blue.300">
            <a href={youtubeSrc} rel="noopener noreferrer">
              YouTube
            </a>
          </Text>
        )}
        {githubRepo && (
          <Text mx={3} my={1} color="blue.300">
            <a href={githubRepo} rel="noopener noreferrer">
              GitHub Repository
            </a>
          </Text>
        )}
        {eventSrc && (
          <Text mx={3} my={1} color="blue.300">
            <a href={eventSrc} rel="noopener noreferrer">
              Event Page
            </a>
          </Text>
        )}
      </VStack>
    </HStack>
  );
};

export default WorkDescription;
