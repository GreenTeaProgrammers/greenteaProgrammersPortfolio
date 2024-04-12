import React from 'react';

const Separator: React.FC = () => {
    const style = {
        border: '0',
        height: '1px',
        background: '#ccc', // 薄いグレー色
        margin: '1em 0 0 0'
    };

    return (
        <>
            <hr style={style} />
        </>
    );
};

export default Separator;