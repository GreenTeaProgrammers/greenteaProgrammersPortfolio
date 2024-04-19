import React from "react";
import Member from "../molecules/member";

const MembersContainer: React.FC = () => {
  return (
    <>
      <Member
        name="かわきん"
        description="testtesttesttest"
        githubSrc="https://github.com/kinjikawaguchi"
        twitterSrc="https://twitter.com/sheissummer310"
      />
      <Member
        name="七草"
        description="TESTTESTESTSTETSETSETS"
        twitterSrc="https://twitter.com/77777kusa"
        githubSrc="https://github.com/KikyoNanakusa"
        skills={["rust", "vim", "unity", "flutter", "java", "typescript", "react", "nextjs", "firebase"]}
      />
      <Member name="こと" description="TESTTESTEST" githubSrc="https://github.com/koto623" />
      <Member name="ほし" description="TESTTESTESTSTETSETSETS" githubSrc="https://github.com/Hosi121" />
    </>
  );
};

export default MembersContainer;
