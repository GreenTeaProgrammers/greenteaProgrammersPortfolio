import React from "react";
import Member from "../molecules/member";

const MembersContainer: React.FC = () => {
  return (
    <>
      <Member name="かわきん" description="testtesttesttest" githubSrc="testtesttest" />
      <Member name="七草" description="TESTTESTESTSTETSETSETS" twitterSrc="testtestsetstest" />
      <Member name="こと" description="TESTTESTESTSTETSETSETS" />
      <Member name="ほし" description="TESTTESTESTSTETSETSETS" />
    </>
  );
};

export default MembersContainer;
