import React from "react";

interface SectionContentProps {
    content?: string,
    component?: React.ReactNode,
};

const SectionContent: React.FC<SectionContentProps> = ({ content, component }) => {
    return (
        <div>
            { content }
            { component }
        </div>
    );
};

export default SectionContent;