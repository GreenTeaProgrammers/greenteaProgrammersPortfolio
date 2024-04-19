import React from "react";
import { VStack } from "@chakra-ui/react";
import SectionTitle from "../atoms/sectionTitle";
import hoiku_icon from "@/assets/Hoiku.png";
import hoicruise_system from "@/assets/hoicruise_system_image.png";
import tasqust_system from "@/assets/tasquest_system_image.png";
import tasquest_icon from "@/assets/tasquest_icon.png";
import Separator from "../atoms/separator";
import Work from "../molecules/work";

const WorksSection: React.FC = () => {
  const hoikuDescription = `昨今、保育園の通園バスに関する問題が叫ばれています。
「ほいくるーず」はそんな諸問題を立ち向かいます。園児たちの顔認証や時間予測、忘れ物の音声通知など、子供たちに寄り添いながらITの力で解決しました。
本作品は、LineYahooが主催するOpen Hack U 2024 TOKYOにて優秀賞を受賞しました。`;

  const tasquestDescription = `やらなきゃいけないメンドウなこと。私たちはそれに日々頭を悩ませています。
私たちはタスクを行う過程に注目し、タスクを行う中で、「楽しい」を実現するには何が必要なのかを考えました。
タスクをやっつける。そんなコンセプトをもとに新しいタスク管理ゲームを作成しました。`;

  return (
    <VStack align="left" p={10} pb={0} width="80%">
      <SectionTitle title="Works" />
      <Work
        title="ほいくる～ず"
        description={hoikuDescription}
        src={hoiku_icon.src}
        iconMaxH={100}
        descriptionImage={hoicruise_system.src}
        descriptionImageMaxH={600}
        githubRepo="https://github.com/GreenTeaProgrammers/WhereChildBus"
        skills={["flutter", "python", "gcp", "github", "pytorch", "go", "planetscale", "docker"]}
      />
      <Work
        title="TasQuest"
        description={tasquestDescription}
        src={tasquest_icon.src}
        iconMaxH={100}
        descriptionImage={tasqust_system.src}
        descriptionImageMaxH={290}
        githubRepo="https://github.com/GreenTeaProgrammers/TasQuest"
        skills={["unity", "swift", "cs", "c", "firebase", "github"]}
      />
      <Separator />
    </VStack>
  );
};

export default WorksSection;
