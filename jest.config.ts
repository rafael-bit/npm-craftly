module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
