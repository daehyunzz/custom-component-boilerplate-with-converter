/* eslint-disable jsdoc/require-jsdoc */
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

interface Props {
    className: string;
    name: string;
    age: number;
    isOpen: boolean;
}

const useGetModules = (functionName: string) => {
    const [modules, setModules] = useState<any[]>([]);

    const dynamicModuleCode = `
        export const ${functionName} = () => {
            console.log('This is a dynamically created function in a module.');
            // return <div>!!!!!</div>;
        };
    `;

    useEffect(() => {
        const module1 = new Blob([dynamicModuleCode], { type: 'application/javascript' });
        const url = URL.createObjectURL(module1);

        console.log({ module1, url });

        import(url).then(module => module.test());
        // import(url)
        //     .then(module => {
        //         console.log('asdfasdf');
        //         setModules(prev => [...prev, module[functionName]]);
        //         module.test();
        //         URL.revokeObjectURL(url);
        //     })
        //     .catch(error => {
        //         console.error('Error creating dynamic module:', error);
        //     });
    }, [dynamicModuleCode, functionName]);

    return modules;
};

const Test: React.FC<any> = React.forwardRef<any, Props>(({ className, name, age, isOpen }, ref) => {
    // const modules = useGetModules('test');

    // console.log({ modules });
    return (
        <div>
            {/* {modules?.[0]?.test()} */}
            <Typography>hihi</Typography>
            {isOpen && <div> hihihi im opened </div>}
        </div>
    );
});

export default Test;
