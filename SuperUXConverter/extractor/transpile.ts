/* eslint-disable import/prefer-default-export */
import { exec } from 'child_process';

export const transpileTsComponent = (targetFilePath: string, resultFilePath: string) => {
    const command = `npx swc ./${targetFilePath} -d ${resultFilePath} --config-file .swcrc`;

    return new Promise((resolve, reject) => {
        exec(command, error => {
            if (error) {
                console.error(`명령어 실행 중 오류 발생: ${error}`);
                reject();
            }

            console.log(`${targetFilePath} 트랜스파일 완료`);
            resolve(true);
        });
    });
};
