module.exports = {
  roots: ['<rootDir>/src'],
  testEnvirontment: 'node',
  transform:{
    '.+\\.ts$' : 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}