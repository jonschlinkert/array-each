/*!
 * array-each <https://github.com/jonschlinkert/array-each>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var each = require('./');

describe('each', function () {
  it('should return undefined when the first arg is null', function () {
    assert(each() === undefined);
  });

  it('should loop over each item in an array and call the given function on every element:', function () {
    var res = [];
    each(['a', 'b', 'c'], function (ele) {
      res.push(ele + ele);
    });
    res.should.eql(['aa', 'bb', 'cc']);
  });

  it('should "break" when `false` is returned:', function () {
    var res = [];
    each(['a', 'b', 'c'], function (ele, i) {
      if (ele === 'b') {
        return false;
      }
      res.push(ele + ele);
    });
    res.should.eql(['aa']);
  });

  it('should expose the index as the second parameter:', function () {
    var res = [];
    each(['a', 'b', 'c'], function (ele, i) {
      res.push(i);
    });
    res.should.eql([0, 1, 2]);
  });
});
