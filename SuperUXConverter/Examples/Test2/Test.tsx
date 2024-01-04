/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';
import type { EventObject } from '../../extractor/types';
import { Button as at_asdf_5_2_3 } from '@mui/material';

interface Props {
    name: string;
    age: number;
    isOpen: boolean;
    테스트: React.ReactNode;
}

const EventInfos: EventObject[] = [
    {
        Name: 'onClick',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 텍스트 색상이 바뀐다.',
    },
];

const Test: React.FC<any> = React.forwardRef<any, Props>(({ 테스트, name, age, isOpen }, ref) => {
    const [active, setActive] = React.useState(false);
    return (
        <div>
            <at_asdf_5_2_3>asdf</at_asdf_5_2_3>
        </div>
    );
});

export default Test;
