/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import { EventObject } from '../../../../SuperUXConverter/extractor/types';

// OnOffSwitch
interface Props {
    initialState: boolean;
}

// const EventInfos: EventObject[] = [
//     {
//         Name: 'onClick',
//         Type: 'MouseEvent',
//         Inputs: ['e'],
//         Description: '클릭 시 토글이 변환된다.',
//     },
// ];

const Switch: React.FC<any> = React.forwardRef<any, Props>(({ initialState }, ref) => {
    const [isOn, setIsOn] = React.useState(initialState);

    const style = {
        height: '18px',
        width: '18px',
        background: '#FFF',
        borderRadius: '50%',
        position: 'absolute',

        transition: 'all 0.15s ease-in',
    };

    if (isOn) {
        style.left = '28px';
        style.right = '2px';
    } else {
        style.right = '28px';
        style.left = '2px';
    }

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
            }}
        >
            <input id="toggleBtn" type="checkbox" style={{ display: 'none' }} />
            <label
                htmlFor="toggleBtn"
                style={{
                    width: '48px',
                    height: '22px',
                    borderRadius: '2em',
                    backgroundColor: isOn ? '#3F83F8' : '#E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    color: isOn ? '#FFF' : '#4B5563',
                    fontSize: '12px',
                    position: 'relative',
                }}
                onClick={() => setIsOn(prev => !prev)}
            >
                <div style={style} />
                <span>on</span>
                <span style={{ marginLeft: '2px' }}>off</span>
            </label>
        </div>
    );
});

export default Switch;
