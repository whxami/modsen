module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
        '@constants/(.*)': '<rootDir>/src/constants/$1',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(svg|png|jpg|jpeg|gif|webp|avif)$': '<rootDir>/__mocks__/fileMock.js',


    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.js'],

};