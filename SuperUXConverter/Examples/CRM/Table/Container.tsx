/* eslint-disable jsdoc/require-jsdoc */
import { EventObject } from 'extractor/types';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const EventInfos: EventObject[] = [{}];

const Container = ({ children }: Props) => {
    const TableContext = React.createContext({});
    return (
        <div>
            <TableContext.Provider value={{}}>{children}</TableContext.Provider>
        </div>
    );
};

export default Container;
