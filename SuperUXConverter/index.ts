import { generateSuperUXFiles } from './extractor';

const [componentFilePath] = process.argv.slice(2);
const resultFileBasePath = 'SuperUXCustomComponent';

(() => {
    if (componentFilePath === undefined) {
        console.error('첫 번째 인자에 변환 대상 컴포넌트 경로가 입력되지 않았습니다.');
        process.exit(0);
    }
    generateSuperUXFiles(componentFilePath, resultFileBasePath);
    console.log(`/${resultFileBasePath} 폴더에 파일 생성 완료`);
})();
