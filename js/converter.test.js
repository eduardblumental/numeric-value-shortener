const { shortening } = require("./converter.js");

test('shortening fucntion', () => {
    expect(shortening(1000)).toBe(1000);
  });
  