/* eslint-disable jsdoc/require-jsdoc */

import React from 'react';

interface Props {
    label: ['결제 대기', '결제 완료', '전송 대기', '결제 실패'];
}

/**
 * 결제 대기
 * 결제 완료
 * 전송 대기
 * 결제 실패
 */
const Badge: React.FC<any> = React.forwardRef<any, Props>(({ label }, ref) => {
    const [text] = label;
    const { backgroundColor, color } = (() => {
        if (text === '결제 대기') {
            return { backgroundColor: '#FFF9DF', color: '#DA7D2E' };
        }
        if (text === '결제 완료') {
            return { backgroundColor: '#DEF7EC', color: '#057A55' };
        }
        if (text === '전송 대기') {
            return { backgroundColor: '#FFF2E8', color: '#FA541C' };
        }

        // 결제 실패
        return { backgroundColor: '#FDF2F2', color: '#F05252' };
    })();
    return (
        <div
            style={{
                backgroundColor,
                display: 'flex',
                alignItems: 'center',
                padding: '2px 8px',
                borderRadius: '4px',
                gap: '4px',
            }}
        >
            <span
                style={{
                    display: 'inline-block',
                    borderRadius: '100px',
                    height: '6px',
                    width: '6px',
                    margin: '6px 0px',
                    backgroundColor: color,
                }}
            />
            <span style={{ color, fontSize: '12px', fontFamily: 'normal', fontWeight: 600, lineHeight: '18px' }}>
                {text}
            </span>
        </div>
    );
});

export default Badge;
