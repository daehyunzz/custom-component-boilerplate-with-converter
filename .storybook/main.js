/**
 * @file Storybook 설정 파일입니다.
 */

const createOurConfig = require('../conf/webpack.conf.js');

const ourConfig = createOurConfig();

module.exports = {
    core: {
        // Storybook 기본 세팅은 Webpack 4를 지원하지만 우리는 Webpack 5를 사용하기 때문에 이 옵션이 필요함.
        builder: 'webpack5'
    },
    stories: [
        '../story/**/*.stories.@(js|jsx|ts|tsx|md|mdx)'
    ],
    addons: [
        '@storybook/addon-essentials'
    ],
    staticDirs: [
        '../public'
    ],
    webpackFinal: config => ({
        ...config,
        resolve: {
            modules: [
                ...config.resolve.modules,
                ...ourConfig.resolve.modules
            ],
            extensions: [
                ...config.resolve.extensions,
                ...ourConfig.resolve.extensions
            ],
            alias: {
                ...config.resolve.alias,
                ...ourConfig.resolve.alias
            },
        },
        module: {
            rules: [
                ...config.module.rules,
                ...ourConfig.module.rules
            ]
        }
    })
};
