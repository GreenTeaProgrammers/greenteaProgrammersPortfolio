import React from "react";
import Member from "../molecules/member";

const MembersContainer: React.FC = () => {
  return (
    <>
      <Member
        name="かわきん"
        description="B3, PM/Backend"
        githubSrc="https://github.com/kinjikawaguchi"
        twitterSrc="https://twitter.com/sheissummer310"
        skills={["golang", "swift", "c", "java", "docker", "gcp"]}
        avatarSrc="https://github.com/kinjikawaguchi.png"
      />
      <Member
        name="七草"
        description="B2, Security/Low-layer"
        twitterSrc="https://twitter.com/77777kusa"
        githubSrc="https://github.com/KikyoNanakusa"
        skills={["rust", "flutter", "java", "typescript", "unity", "kali"]}
        avatarSrc="https://github.com/KikyoNanakusa.png"
      />
      {/* <Member
        name="こと"
        description="B2, Frontend"
        githubSrc="https://github.com/koto623"
        skills={["css", "flutter", "js", "ts", "vue"]}
        avatarSrc="https://github.com/koto623.png"
      /> */}
      <Member
        name="ほし"
        description="B2, Management"
        githubSrc="https://github.com/Hosi121"
        skills={["python", "cpp", "java", "react"]}
        avatarSrc="https://github.com/Hosi121.png"
      />
    </>
  );
};

export default MembersContainer;
