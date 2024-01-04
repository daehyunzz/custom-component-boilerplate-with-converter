/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';
import { Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import type { EventObject } from '../../extractor/types';

interface Props {
    className: string;
    name: string;
    age: number;
    isOpen: boolean;
}

const EventInfos: EventObject[] = [
    {
        Name: 'onClick',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 텍스트 색상이 바뀐다.',
    },
];

const Test: React.FC<any> = React.forwardRef<any, Props>(({ className, name, age, isOpen }, ref) => {
    const [active, setActive] = React.useState(false);
    console.log({ className });
    return (
        <div>
            <span style={{ color: `${active ? 'red' : 'black'}` }}>{name}</span>
            <span>{age}</span>
            <Box>hi</Box>
            <Button>click</Button>
            <button
                type="button"
                onClick={e => {
                    // console.log(e);
                    setActive(prev => !prev);
                }}
            >
                click
            </button>
            <Typography />

            {isOpen && <div> hihihi im opened </div>}
        </div>
    );
});

export default Test;
