import { bignumber } from '../../src';

describe('bignumber.safeFrom', () => {
  it('parses a number successfully', () => {
    const result = bignumber.safeFrom('123141');
    expect(result.toNumber()).toEqual(123141);
  });
  it('parses a hex value successfully', () => {
    const result = bignumber.safeFrom('0x20');
    expect(result.toNumber()).toEqual(32);
  });
  it('parses 0x successfully', () => {
    const result = bignumber.safeFrom('0x');
    expect(result.toNumber()).toEqual(0);
  });
  it('parses undefined successfully', () => {
    const result = bignumber.safeFrom(undefined);
    expect(result).toBeUndefined();
  });
  it('handles string correctly', () => {
    const result = bignumber.safeFrom('a string');
    expect(result).toBeUndefined();
  });
});
