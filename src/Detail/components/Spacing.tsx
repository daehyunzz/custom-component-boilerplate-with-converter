/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

interface Props {
    gap: string;
}

const Spacing: React.FC<any> = React.forwardRef<any, Props>(({ gap }, ref) => {
    return <div style={{ height: gap }} />;
});

export default Spacing;
