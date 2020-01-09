const assert = require('assert');
const {expect} = require('chai');

const {sum, mult} = require('../index.js');

describe('function sum', () => {
    it('should function sum equal 6', () => {
        assert.equal(sum(2,4), 6);
        expect(sum(2,4)).equal(6);
    })

    it('should function sum not equal 0', () => {
        assert.notEqual(sum(2,4), 0);
    })
})


it('should mult works correct', () => {
    assert.equal(mult(2,4), 8);
})

