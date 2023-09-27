/* eslint-disable import/prefer-default-export */
import path from 'path';
import { typeExtractor } from './type-extract';
import { getFileName } from './file-name';
import { transpileTsComponent } from './transpile';
import { generateCustomComponentMetaDataFile } from './generate-meta-data';
import { generateCustomComponentJsFile } from './generate-custom-component';

/**
 * 아래 함수는 두 가지 전제 조건이 필요합니다.
 *
 * 1. 컴포넌트는 함수 표현식으로 표현되어야하며 React.forardRef로 감싸진 형태여야함 (ex. const CustomComponent = React.forwardRef(...))
 * 2. 컴포넌트 props의 인터페이스
 *  2-1. import 구문 아래, CustomComponent 표현식 위에 정의되어야함
 *  2-2. type이 아니라 interface로 선언되어야함
 *  2-3. prop이 optional한 경우 union 타입으로 표현해줘야함
 * 3. 파일 최하단에는 export 구문이 존재해야함
 *
 * ex) CustomComponent.tsx 파일 예시
 *
 * import ...
 *
 * interface Props { // 조건 2-1, 조건 2-2
 *  name: string | undefined; // 조건 2-3
 *  age: number;
 * }
 *
 * const CustomComponent = React.forardRef<any, Props>(({ ...props들 }, ref) => { // 조건 1
 *  ...구현 내용
 * });
 *
 * export default CustomComponent; // 조건 3
 *
 * @param targetFilePath 커스텀 컴포넌트 파일 경로
 * @param resultFolderPath 결과 파일을 저장할 경로
 */
export const generateSuperUXFiles = async (targetFilePath: string, resultFolderPath: string) => {
    const name = getFileName(targetFilePath);
    const [resultFileBasePath] = resultFolderPath.split('/');
    const resultJsFilePath = path.join(resultFolderPath, `${name}.js`);
    const resultMetaDataFilePath = path.join(resultFolderPath, `${name}.json`);

    const generateCustomComponentFilesCb = async types => {
        transpileTsComponent(targetFilePath, resultFileBasePath);

        generateCustomComponentJsFile(resultJsFilePath);
        generateCustomComponentMetaDataFile(types, resultMetaDataFilePath);

        console.log(`${resultFolderPath} 폴더에 ${name} 파일 생성 완료`);
    };

    typeExtractor(targetFilePath, generateCustomComponentFilesCb);
};
