import { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	modulePathIgnorePatterns: [
		'<rootDir>/dist/',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/dist/',
	],
};

export default config;