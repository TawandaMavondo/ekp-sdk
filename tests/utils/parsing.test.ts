import { NULL_ADDRESS, parseEvmAddress, parseEvmNumber } from '../../src';

describe('parseEvmNumber', () => {
  it('parses a number successfully', () => {
    const result = parseEvmNumber('123141');
    expect(result).toEqual(123141);
  });
  it('parses a hex value successfully', () => {
    const result = parseEvmNumber('0x20');
    expect(result).toEqual(32);
  });
  it('parses 0x successfully', () => {
    const result = parseEvmNumber('0x');
    expect(result).toEqual(0);
  });
  it('parses undefined successfully', () => {
    const result = parseEvmNumber(undefined);
    expect(result).toBeUndefined();
  });
  it('handles string correctly', () => {
    const result = parseEvmNumber('a string');
    expect(result).toBeUndefined();
  });
});

describe('parseEvmAddress', () => {
  it('parses a topic successfully', () => {
    const result = parseEvmAddress(
      '0x0000000000000000000000002adb14f05bffeecfedfe4fcbdceabf3b12decf4d',
    );

    expect(result).toEqual('0x2adb14f05bffeecfedfe4fcbdceabf3b12decf4d');
  });
  it('parses null address successfully', () => {
    const result = parseEvmAddress(
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    );

    expect(result).toEqual(NULL_ADDRESS);
  });
});
