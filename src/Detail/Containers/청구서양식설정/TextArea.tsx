import React from 'react';
import { EventObject } from '../../../../SuperUXConverter/extractor/types';

// TextArea
interface Props {
    title: string;
}

const EventInfos: EventObject[] = [
    {
        Name: 'onChange',
        Type: 'KeyboardEvent',
        Inputs: ['e'],
        NewValueLocation: {
            index: 0,
            ValueLocation: 'target.value',
        },
        Description: '텍스트 변경시 발생할 이벤트',
    },
];

const TextArea: React.FC<any> = React.forwardRef<any, Props>(({ title, onChange }, ref) => {
    return (
        <textarea
            value={title}
            style={{
                resize: 'none',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                padding: '10px 12px',
                height: '128px',
            }}
            onChange={e => {
                onChange?.(e);
            }}
        />
    );
});

export default TextArea;
