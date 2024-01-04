/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';
import type { EventObject } from '../../extractor/types';

interface Props {
    infos: { id: string; name: string; age: number }[];
}

const EventInfos: EventObject[] = [
    {
        Name: 'onClick',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 텍스트 색상이 바뀐다.',
    },
];

const TestChildren: React.FC<any> = React.forwardRef<any, Props>(({ infos }, ref) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {infos.map(({ id, name, age }) => {
                return (
                    <span key={id}>
                        이름: {name}, 나이: {age}
                    </span>
                );
            })}
        </div>
    );
});
