import React from "react";
import { VStack } from "@chakra-ui/react";
import SectionTitle from "../atoms/sectionTitle";
import SectionContent from "../molecules/sectionContent";
import Separator from "../atoms/separator";

const content =
`静岡大学の学生グループで、主にハッカソンに出場しています。
意欲的なメンバーで構成され、日々、開発や自己研鑽に取り組んでスキルアップに努めています。
また、チームとして、競技プログラミングやCTF、アプリ開発やウェブ開発など幅広いドメインに精通しています。`

const AboutSection: React.FC = () => {
  return (
    <VStack align="left" p={10} pb={0} width="80%">
      <SectionTitle title="About" />
      <SectionContent content={content} />
      <Separator />
    </VStack>
  );
};

export default AboutSection;
