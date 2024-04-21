import { HStack } from "@chakra-ui/react";
import HeaderLink from "../atoms/headerLink";

const HeaderLinks: React.FC = () => {
  return (
    <HStack spacing={5} marginRight={5}>
      {/* <HeaderLink text="About" color="#DBF227" href="/about" />
      <HeaderLink text="Member" color="#DBF227" href="/member" /> */}
      <HeaderLink text="Contact" color="#DBF227" href="/contact" />
    </HStack>
  );
};

export default HeaderLinks;
