import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionTitle from '../atoms/sectionTitle';
import SectionContent from '../molecules/sectionContent';
import Separator from '../atoms/separator';

const content = "GreenTeaProgrammersは静岡大学の学生で構成される団体です。\n" +
                "学生が自主的に集まり、ハッカソンへの参加やプロダクトの開発を積極的に行っています";

const AboutSection: React.FC = () => {
    return (
        <VStack align="left" p={10} pb={0} width="80%">
            <SectionTitle title="About" />
            <SectionContent content={ content } />
            <Separator />
        </VStack>
    );
};

export default AboutSection;