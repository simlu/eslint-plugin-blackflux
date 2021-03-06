const expect = require('chai').expect;
const { describe } = require('node-tdd');
const index = require('../src/index');

describe('Testing index', () => {
  it('Test Exported Rules', () => {
    expect(Object.keys(index.rules).sort()).to.deep.equal([
      'istanbul-prevent-ignore',
      'kebab-case-enforce',
      'prevent-typeof-object'
    ]);
  });
});
