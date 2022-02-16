import { evm, NULL_ADDRESS } from '../../src';

describe('evm.topicToAddress', () => {
  it('parses a topic successfully', () => {
    const result = evm.topicToAddress(
      '0x0000000000000000000000002adb14f05bffeecfedfe4fcbdceabf3b12decf4d',
    );

    expect(result).toEqual('0x2adb14f05bffeecfedfe4fcbdceabf3b12decf4d');
  });
  it('parses null address successfully', () => {
    const result = evm.topicToAddress(
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    );

    expect(result).toEqual(NULL_ADDRESS);
  });
});
