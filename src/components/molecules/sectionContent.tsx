import React from "react";

interface SectionContentProps {
    content: string;
};

const SectionContent: React.FC<SectionContentProps> = ({ content }) => {
    return (
        <div>
            { content }
        </div>
    );
};

export default SectionContent;