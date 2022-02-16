import { BigNumber, BigNumberish } from 'ethers';

export function safeFrom(value: BigNumberish) {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  if (value === '0x') {
    return BigNumber.from(0);
  } else {
    try {
      return BigNumber.from(value);
    } catch (error) {
      console.warn(error.message);
      return undefined;
    }
  }
}
