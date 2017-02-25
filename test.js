/*!
 * array-each <https://github.com/jonschlinkert/array-each>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var each = require('./');

describe('each', function() {
  it('should return when the first arg is null', function() {
    var arr;
    each('', function(ele) {
      arr = [ele];
    });
    assert.equal(arr, undefined);
  });

  it('should loop over each item in an array and call the given function on every element:', function() {
    var res = [];
    each(['a', 'b', 'c'], function(ele) {
      res.push(ele + ele);
    });
    assert.deepEqual(res, ['aa', 'bb', 'cc']);
  });

  it('should "break" when `false` is returned:', function() {
    var res = [];
    each(['a', 'b', 'c'], function(ele, i) {
      if (ele === 'b') {
        return false;
      }
      res.push(ele + ele);
    });
    assert.deepEqual(res, ['aa']);
  });

  it('should expose the index as the second parameter:', function() {
    var res = [];
    each(['a', 'b', 'c'], function(ele, i) {
      res.push(i);
    });
    assert.deepEqual(res, [0, 1, 2]);
  });
});
