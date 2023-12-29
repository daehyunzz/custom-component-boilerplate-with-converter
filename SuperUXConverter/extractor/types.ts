import { z } from 'zod';

const EventNameSchema = z.enum([
    'onMouseDown',
    'onMouseUp',
    'onClick',
    'onDoubleClick',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onWheel',
    'onContextMenu',
    'onBlur',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onFocus',
    'onDrag',
    'onDragStart',
    'onDragEnd',
    'onDragEnter',
    'onDragLeave',
    'onDragOver',
    'onScroll',
    'onDrop',
    'onCopy',
    'onCut',
    'onPaste',
    'onInput',
    'onInvalid',
    'onReset',
    'onSearch',
    'onSelect',
    'onSubmit',
    'onFocusVisible',
    'onDelete',
    'onChange',
    'onBackdropClick',
    'onClose',
    'onOpen',
    'onHighlightChange',
    'onInputChange',
    'addEndListener',
    'onEnter',
    'onEntering',
    'onEntered',
    'onExit',
    'onExiting',
    'onExited',
    'onClickAway',
    'onChangeActive',
    'onPageChange',
    'onRowsPerPageChange',
    'onCustomClick',
    'onAccept',
    'onError',
    'onMonthChange',
    'onViewChange',
    'onYearChange',
    'onDaySelect',
    'onFocusedDayChange',
    'onComponentMount',
    'onComponentUnMount',
    'onLoadMoreRows',
]);

const EventTypeSchema = z.enum([
    'MouseEvent',
    'WheelEvent',
    'KeyEvent',
    'KeyboardEvent',
    'FocusEvent',
    'FormEvent',
    'ChangeEvent',
    'CompositionEvent',
    'SyntheticEvent',
    'DragEvent',
    'ClipboardEvent',
    'void',
]);

export const EventObjectSchema = z.object({
    Name: EventNameSchema,
    Type: EventTypeSchema,
    Inputs: z.array(z.string()).optional().default(['']),
    NewValueLocation: z
        .object({
            index: z.number(),
            ValueLocation: z.array(z.string()).optional(),
        })
        .optional(),
    Description: z.string().optional().default(''),
});

/**
 * 이벤트 이름
 */
export type EventName = z.infer<typeof EventNameSchema>;

/**
 * 이벤트 타입
 */
export type EventType = z.infer<typeof EventTypeSchema>;

/**
 * 이벤트 메타 데이터 타입
 *
 * @param {EventName} Name 이벤트 이름
 * @param {EventType} Type 이벤트 타입
 * @param {string[]} [Inputs] 이벤트 호출시 넘기는 props 이름들을 정의
 * @param {object} [NewValueLocation] Set Event Value 로직시에 사용. 현재는 onChange, onInputChange에서만 해당 로직 사용 가능
 * @param {string} [Description] 이벤트 설명
 */
export type EventObject = z.infer<typeof EventObjectSchema>;
