import { validate } from 'bycontract';
import { BigNumber, ethers } from 'ethers';
import moment from 'moment';
export function parseEvmNumber(value: string) {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  let num: number;

  if (value === '0x') {
    return 0;
  } else if (value.startsWith('0x')) {
    num = ethers.BigNumber.from(value).toNumber();
  } else {
    num = Number(value);
  }

  if (isNaN(num)) {
    return undefined;
  }

  return num;
}

export function parseEvmBigNumber(value: string) {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  let num: ethers.BigNumber;

  if (value === '0x') {
    return BigNumber.from(0);
  } else if (value.startsWith('0x')) {
    num = ethers.BigNumber.from(value);
  }

  return num;
}

export function parseEvmAddress(topic: string) {
  validate(topic, 'string');

  if (topic.startsWith('0x000000000000000000000000') && topic.length === 66) {
    return `0x${topic.slice(26)}`.toLowerCase();
  }

  return topic;
}

export function parseStartOfDay(timestamp: number) {
  validate(timestamp, 'number');

  return moment.unix(timestamp).utc().startOf('day').unix();
}
