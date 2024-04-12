import React from "react";
import { Text } from "@chakra-ui/react";

interface SectionTitleProps {
    title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <Text fontSize="2xl" fontWeight="bold">
            { title }
        </Text>
    );
};

export default SectionTitle;