/* eslint-disable import/prefer-default-export */
import { execSync } from 'child_process';

export const transpileTsComponent = (targetFilePath: string, resultFilePath: string) => {
    const command = `npx swc ./${targetFilePath} -d ${resultFilePath} --config-file .swcrc`;

    // @ts-ignore
    execSync(command, (error, stdout) => {
        if (error) {
            console.error(`명령어 실행 중 오류 발생: ${error}`);
            return;
        }

        console.log('명령어 실행 완료');
        console.log('표준 출력:', stdout);
    });
};
