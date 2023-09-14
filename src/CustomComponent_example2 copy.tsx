import * as React from 'react';

const CustomComponent: React.FC<any> = React.forwardRef<any, any>(
    (
        { className, dropdown, spinner, color, objectNotArray, objectArray, value, onChange, onMouseDown, children },
        ref
    ) => {
        const currentDate = new Date(value);

        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        let date = currentDate.getDate();

        const width = '300px';
        const height = '60px';
        const handleChange = (event: any, newDate: any) => {
            onChange(newDate);
        };
        const handleYearChange = (event: any, year: any) => {
            const newDate = new Date(year, month, date);
            handleChange(event, newDate);
        };
        const handleMonthChange = (event: any, month: any) => {
            const newDate = new Date(year, month, date);
            handleChange(event, newDate);
        };
        const handleDateChange = (event: any, date: any) => {
            const newDate = new Date(year, month, date);
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
                            handleYearChange(event, year + 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleMonthChange(event, month + 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleDateChange(event, date + 1);
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input
                        style={{ width: width, height: height, boxSizing: 'border-box', textAlign: 'center' }}
                        value={year}
                        onChange={event => {
                            handleYearChange(event, Number(event.target.value));
                        }}
                    />
                    <input
                        style={{ width: width, height: height, boxSizing: 'border-box', textAlign: 'center' }}
                        value={month + 1}
                        onChange={event => {
                            handleMonthChange(event, Number(event.target.value) - 1);
                        }}
                    />
                    <input
                        style={{ width: width, height: height, boxSizing: 'border-box', textAlign: 'center' }}
                        value={date}
                        onChange={event => {
                            handleDateChange(event, Number(event.target.value));
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleYearChange(event, year - 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleMonthChange(event, month - 1);
                        }}
                    />
                    <button
                        style={{ width: width, height: height, backgroundColor: color }}
                        onClick={(event: any) => {
                            handleDateChange(event, date - 1);
                        }}
                    />
                </div>
                <div>{children}</div>
            </div>
        );
    }
);

export default CustomComponent;
