import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionTitle from '../atoms/sectionTitle';
import SectionContent from '../molecules/sectionContent';
import Separator from '../atoms/separator';
import Member from '../molecules/member';

const MemberSection: React.FC = () => {
    return (
        <VStack align="left" p={10} pb={0} width="80%">
            <SectionTitle title="Member" />
            <Member name="かわきん" description="testtesttesttest" githubSrc='testtesttest'/>
            <Member name="七草" description="TESTTESTESTSTETSETSETS" twitterSrc='testtestsetstest'/>
            <Member name="こと" description="TESTTESTESTSTETSETSETS"/>
            <Member name="ほし" description="TESTTESTESTSTETSETSETS"/>
            <Separator />
        </VStack>
    );
};

export default MemberSection;