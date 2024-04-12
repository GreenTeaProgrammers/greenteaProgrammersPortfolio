import React from 'react';
import {HStack, Img} from '@chakra-ui/react';
import WorkDescription from './workDescription';

interface WorkProps {
    src?: string,
    alt?: string,
    maxH?: number,
    title: string,
    description: string,
}

const Work: React.FC<WorkProps> = ({ src="https://via.placeholder.com/150", alt="image", maxH=200, title, description}) => {
    return (
        <HStack p={5} border="1px solid #ccc" my={3} align="flex-start">
            <Img src={ src } alt={ alt } maxH={ maxH }/>
            <WorkDescription title={ title } description= {description }/>
        </HStack>

    );
};

export default Work;