import React from "react";
import { VStack } from "@chakra-ui/react";
import SectionTitle from "../atoms/sectionTitle";
import Separator from "../atoms/separator";
import MembersContainer from "./membersContainer";

const MemberSection: React.FC = () => {
  return (
    <VStack align="left" p={10} pb={0} width="80%">
      <SectionTitle title="Member" />
      <MembersContainer />
      <Separator />
    </VStack>
  );
};

export default MemberSection;
