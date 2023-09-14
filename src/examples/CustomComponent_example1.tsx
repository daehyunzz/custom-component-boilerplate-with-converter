import * as React from 'react';

const CustomComponent: React.FC<any> = React.forwardRef<any, any>(
    (
        {
            date,
            className,
            color,
            onChange,
            onMouseDown,
            children,
            dropdown,
            spinner,
            objectNotArray,
            objectArray,
            ...props
        },
        ref
    ) => {
        const currentDate = new Date(date);
        const [inputs, setInputs] = React.useState({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
        });

        React.useEffect(() => {
            const currentDate = new Date(date);
            setInputs({
                year: currentDate.getFullYear(),
                month: currentDate.getMonth(),
                date: currentDate.getDate(),
            });
        }, [date]);

        const width = '300px';
        const height = '60px';
        const handleChange = (event: any, newDate: any) => {
            setInputs({ year: newDate.getFullYear(), month: newDate.getMonth(), date: newDate.getDate() });
            onChange(newDate);
        };
        const handleYearChange = (event: any, year: any) => {
            const newDate = new Date(year, inputs.month, inputs.date);
            handleChange(event, newDate);
        };
        const handleMonthChange = (event: any, month: any) => {
            const newDate = new Date(inputs.year, month, inputs.date);
            handleChange(event, newDate);
        };
        const handleDateChange = (event: any, date: any) => {
            const newDate = new Date(inputs.year, inputs.month, date);
            handleChange(event, newDate);
        };
        return (
            <div
                className={className}
                ref={ref}
                style={{ display: 'flex', flexDirection: 'column' }}
                onMouseDown={onMouseDown}
            >
                <div>Dropdown Test: {dropdown}</div>
                <div>Spinner Test: {spinner}</div>
                <div>ObjectNotArray Test: {JSON.stringify(objectNotArray)}</div>
                <div>objectArray Test: {JSON.stringify(objectArray)}</div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleYearChange(event, inputs.year + 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleMonthChange(event, inputs.month + 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleDateChange(event, inputs.date + 1);
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input
                        style={{ width: width, height: height, boxSizing: 'border-box', textAlign: 'center' }}
                        value={inputs.year}
                        onChange={event => {
                            handleYearChange(event, Number(event.target.value));
                        }}
                    />
                    <input
                        style={{ width: width, height: height, boxSizing: 'border-box', textAlign: 'center' }}
                        value={inputs.month + 1}
                        onChange={event => {
                            handleMonthChange(event, Number(event.target.value) - 1);
                        }}
                    />
                    <input
                        style={{ width: width, height: height, boxSizing: 'border-box', textAlign: 'center' }}
                        value={inputs.date}
                        onChange={event => {
                            handleDateChange(event, Number(event.target.value));
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleYearChange(event, inputs.year - 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleMonthChange(event, inputs.month - 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleDateChange(event, inputs.date - 1);
                        }}
                    />
                </div>
                <div>{children}</div>
            </div>
        );
    }
);

export default CustomComponent;
