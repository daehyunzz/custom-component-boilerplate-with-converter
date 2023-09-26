module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(module-to-keep-transformed)/)'],
    moduleNameMapper: {
        '^extractor/(.*)$': '<rootDir>/SuperUXConverter/extractor/$1',
        '^parser/(.*)$': '<rootDir>/SuperUXConverter/parser/$1',
    },
};
