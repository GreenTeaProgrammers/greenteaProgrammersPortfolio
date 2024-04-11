import { Box, Img } from "@chakra-ui/react";
import BannerImage from "@/assets/icon_alpha.png";
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <Box>
            <Link href="/">
                <Img src={ BannerImage.src } alt="banner" maxHeight="100px" />
                </Link>
        </Box>
    );
};

export default Banner;