// jest.config.ts
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Path to the Next.js application directory
});

const customJestConfig = {
  // Where Jest looks for files to test
  testMatch: ['next/tests/**/*.(test|spec).ts?(x)'],
  
  // Transforms TypeScript files using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Setting up the test environment
  testEnvironment: 'jest-environment-jsdom',

  // Specifying module directories for resolving imports
  moduleDirectories: ['node_modules', 'next/'],

  // Setting up module alias to match the next.js alias patterns
  moduleNameMapper: {
    '^@/(.*)$': 'next/src/$1',
  },
};

export default createJestConfig(customJestConfig);
