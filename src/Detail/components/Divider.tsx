/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

interface Props {
    height?: string;
    width?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    color?: string;
}

const Divider: React.FC<any> = React.forwardRef<any, Props>(
    (
        { height = '1px', width = '100%', color = '#E5E7EB', top = '0px', bottom = '0px', left = '0px', right = '0px' },
        ref
    ) => {
        return <div style={{ height, width, backgroundColor: color, margin: `${top} ${right} ${bottom} ${left}` }} />;
    }
);

export default Divider;
