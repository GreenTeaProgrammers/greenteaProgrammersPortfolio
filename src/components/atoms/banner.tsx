import { Box, Img } from "@chakra-ui/react";
import BannerImage from "@/assets/icon_alpha.png";
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <Link href="/">
            <Img src={BannerImage.src} alt="banner" height="100%" />
        </Link>
    );
};

export default Banner;