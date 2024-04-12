import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionTitle from '../atoms/sectionTitle';
import SectionContent from '../molecules/sectionContent';
import Separator from '../atoms/separator';
import Work from '../molecules/work';

const WorksSection: React.FC = () => {
    return (
        <VStack align="left" p={10} pb={0} width="80%">
            <SectionTitle title="Works" />
            <Work title="TasQuest" description='testtesttesttest'/>
            <Work title="ほいくる～ず" description='TESTTESTESTSTETSETSETS'/>
            <Separator />
        </VStack>
    );
};

export default WorksSection;