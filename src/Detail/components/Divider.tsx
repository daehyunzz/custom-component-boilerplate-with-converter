/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

interface Props {
    height?: string;
    width?: string;
    top?: string;
    bottom?: string;
    color?: string;
}

const Divider: React.FC<any> = React.forwardRef<any, Props>(
    ({ height = '1px', width = '100%', color = '#E5E7EB', top = '0px', bottom = '0px' }, ref) => {
        return <div style={{ height, width, backgroundColor: color, marginTop: top, marginBottom: bottom }} />;
    }
);

export default Divider;
