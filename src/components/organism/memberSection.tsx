import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionTitle from '../atoms/sectionTitle';
import SectionContent from '../molecules/sectionContent';
import Separator from '../atoms/separator';

const MemberSection: React.FC = () => {
    return (
        <VStack align="left" p={10} pb={0} width="80%">
            <SectionTitle title="Member" />
            <SectionContent content="This is the member section." />
            <Separator />
        </VStack>
    );
};

export default MemberSection;