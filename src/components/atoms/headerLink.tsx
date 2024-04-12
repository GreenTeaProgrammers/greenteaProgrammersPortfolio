import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderLinkProps {
    text: string
    color: string;
    href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ text, color, href }) => {

    return (
        <Link href={ href }>
            <Text color={ color } fontSize="lg">
                { text }
            </Text>
        </Link>
    );
};

export default HeaderLink;