import { Img } from "@chakra-ui/react";
import BannerImage from "@/assets/icon_alpha.png";
import Link from "next/link";

interface BannerProps {
    height?: string,
}

const Banner: React.FC<BannerProps> = ({ height="80px"}) => {
    return (
        <Link href="/">
            <Img src={BannerImage.src} alt="banner" height={ height } maxH="100%" m={5}/>
        </Link>
    );
};

export default Banner;