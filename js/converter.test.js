const { shortening } = require('./converter.js');

describe('Converts to specific unit', () => {
  test('shortening(123456789, "") -> 123456789', () => {
    expect(shortening(123456789, "")).toEqual({ value: 123456789, valueUnit: "" });
  });

  test('shortening(123456789, "K") -> 123456.789 K', () => {
    expect(shortening(123456789, "K")).toEqual({ value: 123456.789, valueUnit: "K" });
  });

  test('shortening(123456789, "M") -> 123.456789 M', () => {
    expect(shortening(123456789, "M")).toEqual({ value: 123.456789, valueUnit: "M" });
  });

  test('shortening(123456789, "bn") -> 0.123456789 bn', () => {
    expect(shortening(123456789, "bn")).toEqual({ value: 0.123456789, valueUnit: "bn" });
  });

  test('shortening(123456789, "T") -> 0.000123456789 T', () => {
    expect(shortening(123456789, "T")).toEqual({ value: 0.000123456789, valueUnit: "T" });
  });
});

describe('Converts to largest whole unit if unit is undefined or null', () => {
  test('shortening(10) -> 10', () => {
    expect(shortening(10)).toEqual({ value: 10, valueUnit: "" });
  });

  test('shortening(10000) -> 10 K', () => {
    expect(shortening(10000)).toEqual({ value: 10, valueUnit: "K" });
  });

  test('shortening(10000000) -> 10 M', () => {
    expect(shortening(10000000)).toEqual({ value: 10, valueUnit: "M" });
  });

  test('shortening(10000000000) -> 10 bn', () => {
    expect(shortening(10000000000)).toEqual({ value: 10, valueUnit: "bn" });
  });

  test('shortening(10000000000000) -> 10 T', () => {
    expect(shortening(10000000000000)).toEqual({ value: 10, valueUnit: "T" });
  });
});

describe('Returns original value and unit if unit is invalid', () => {
  test('shortening(1234, "invalid unit") -> 1234, invalid unit', () => {
    expect(shortening(1234, "invalid unit")).toEqual({ value: 1234, valueUnit: "invalid unit" });
  });
});

describe('Returns original value and unit if value is invalid', () => {
  test('shortening(undefined, "K") -> undefined, K', () => {
    expect(shortening(undefined, "K")).toEqual({ value: undefined, valueUnit: "K" });
  });
});

describe('Returns original value and empty unit if value and unit are invalid', () => {
  test('shortening(undefined) -> undefined, ""', () => {
    expect(shortening(undefined)).toEqual({ value: undefined, valueUnit: "" });
  });
});

describe('Handles zero', () => {
  test('shortening(0) -> 0, ""', () => {
    expect(shortening(0)).toEqual({ value: 0, valueUnit: "" });
  });
});

describe('Handles negative values', () => {
  test('shortening(-1000) -> -1000, ""', () => {
    expect(shortening(-1000)).toEqual({ value: -1000, valueUnit: "" });
  });
});

describe('Handles non-numeric values', () => {
  test('shortening("test") -> test, ""', () => {
    expect(shortening("test")).toEqual({ value: "test", valueUnit: "" });
  });
});
