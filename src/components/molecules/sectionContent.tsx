import React from "react";

interface SectionContentProps {
    content?: string,
    component?: React.ReactNode,
};

const SectionContent: React.FC<SectionContentProps> = ({ content, component }) => {
    return (
        <div style={{ whiteSpace: 'pre-wrap' }}>
            { content }
            { component }
        </div>
    );
};

export default SectionContent;