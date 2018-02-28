require('babel-polyfill'); /* eslint-disable required-modules */
'use strict';

var assert = require('assert');

// https://github.com/w3c/testharness.js/blob/master/testharness.js
module.exports = {
  test: function (fn, desc) {
    try {
      fn();
    } catch (err) {
      console.error('In ' + desc + ':');
      throw err;
    }
  },
  assert_equals: assert.strictEqual,
  assert_true: function (value, message) {
    return assert.strictEqual(value, true, message);
  },
  assert_false: function (value, message) {
    return assert.strictEqual(value, false, message);
  },
  assert_throws: function (code, func, desc) {
    assert.throws(func, function (err) {
      return typeof err === 'object' && 'name' in err && err.name.startsWith(code.name);
    }, desc);
  },
  assert_array_equals: assert.deepStrictEqual,
  assert_unreached: function (desc) {
    assert.fail('Reached unreachable code: ' + desc);
  }
};