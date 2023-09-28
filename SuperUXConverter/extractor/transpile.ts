/* eslint-disable import/prefer-default-export */
import { exec } from 'child_process';

export const transpileTsComponent = (targetFilePath: string, resultFilePath: string, cb: () => void) => {
    const command = `npx swc ./${targetFilePath} -d ${resultFilePath} --config-file .swcrc`;

    // @ts-ignore
    exec(command, error => {
        if (error) {
            console.error(`명령어 실행 중 오류 발생: ${error}`);
            return;
        }

        cb();
        // console.log('표준 출력:', stdout);
    });
};
