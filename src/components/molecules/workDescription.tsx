import React from "react";
import { Text } from "@chakra-ui/react";

interface WorkDescriptionProps {
    title: string,
    description: string,
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({ title, description }) => {
    return (
        <div style={{marginLeft: "3px", marginRight: "3px"}}>
            <Text fontSize="xl" fontWeight="bold">{ title }</Text>
            <Text mx={3} my={1}>{ description }</Text>
        </div>
    );
};

export default WorkDescription;