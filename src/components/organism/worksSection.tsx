import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionTitle from '../atoms/sectionTitle';
import SectionContent from '../molecules/sectionContent';

const WorksSection: React.FC = () => {
    return (
        <VStack align="left" p={10} width="80%">
            <SectionTitle title="Works" />
            <SectionContent content="This is the works section." />
        </VStack>
    );
};

export default WorksSection;