const sum = require('./sum')

describe('sum', function() {
  it('adds a and b', function(){
    expect(sum(1, 2)).toBe(3)
  })
})
