var partitionInteger = require('../partition-integer').partitionInteger;
var assert = require('assert');

describe('partition integer', function () {
    describe('with k', function () {
        it('4/2 has 2', function () {
            assert.deepEqual(partitionInteger(4, 2), 2);
        });
        it('10/3 has 8', function () {
            assert.deepEqual(partitionInteger(10, 3), 8);
        });
        it('20/4 has 64', function () {
            assert.deepEqual(partitionInteger(20, 4), 64);
        });
    });

    describe('without k', function () {
        it('4 has 5', function () {
            assert.deepEqual(partitionInteger(4), 5);
        });
        it('10 has 42', function () {
            assert.deepEqual(partitionInteger(10), 42);
        });
        it('20 has 627', function () {
            assert.deepEqual(partitionInteger(20), 627);
        });
    });
});