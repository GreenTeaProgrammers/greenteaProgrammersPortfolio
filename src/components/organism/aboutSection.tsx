import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionTitle from '../atoms/sectionTitle';
import SectionContent from '../molecules/sectionContent';

const AboutSection: React.FC = () => {
    return (
        <VStack align="left" p={10} width="80%">
            <SectionTitle title="About" />
            <SectionContent content="This is the about section." />
        </VStack>
    );
};

export default AboutSection;