/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { EventObject, EventObjectSchema } from './types';
// {
//     Name: 'onChange',
//     Type: 'ChangeEvent',
//     Inputs: [],
//     NewValueLocation: { index: 0 },
//     Description: 'test',
// };

/**
 * 이벤트는 우측 Logic 툴페인 및 Custom Component 내부 코드에서 사용될 항목을 정의하는 데 사용.
 */
export const generateEventObjects = (inputs: unknown[]): EventObject[] | undefined => {
    return inputs as EventObject[];
    // try {
    //     return inputs.map(input => EventObjectSchema.parse(input));
    // } catch (e) {
    //     console.error('비정상적인 Event 필드가 있습니다.', e);
    // }
};
