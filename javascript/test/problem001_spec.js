var expect = require("chai").expect;
var findSumOfMultiples = require("../problem001.js");

describe('#findSumOfMultiples', function(){
  it('should return the sum of all unique multiples for the specified values', function(){
    expect(findSumOfMultiples(10, [3,5])).to.equal(23);
    expect(findSumOfMultiples(1000, [3,5])).to.equal(233168);
  });
});
