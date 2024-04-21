import SectionTitle from "@/components/atoms/sectionTitle";
import SectionContent from "@/components/molecules/sectionContent";
import { VStack, Text} from "@chakra-ui/layout";
import React from "react";

const ContactPage: React.FC = () => {
  const content: string = `お問い合わせは以下にお願いします。
mail: greenteaprogrammers@gmail.com`
  return (
    <VStack width="100%" p={5}>
      <VStack width="80%" p={5} align="left">
        <SectionTitle title="Contact" />
        <SectionContent content={content} />
        <Text color="blue.300"><a href="https://github.com/GreenTeaProgrammers">Github Organization</a></Text>
      </VStack>
    </VStack>
  );
};

export default ContactPage;
