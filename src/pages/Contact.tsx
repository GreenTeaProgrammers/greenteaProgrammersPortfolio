import SectionTitle from '@/components/atoms/sectionTitle';
import SectionContent from '@/components/molecules/sectionContent';
import { VStack } from '@chakra-ui/layout';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <VStack width="100%" p={5}>
            <VStack width="80%" p={5} align="left">
                <SectionTitle title="Contact" />
                <SectionContent content="お問い合わせは以下のメールアドレスにお願いします" />
            </VStack>
        </VStack>
    );
}

export default ContactPage;

