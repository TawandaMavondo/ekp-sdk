import { validate } from 'bycontract';

export function topicToAddress(topic: string) {
  validate(topic, 'string');

  if (topic.startsWith('0x000000000000000000000000') && topic.length === 66) {
    return `0x${topic.slice(26)}`.toLowerCase();
  }

  return topic;
}

export function methodNameFromData(data: string) {
  if (!data || data.length < 10) {
    return data;
  }
  const methodId = data.substring(0, 10).toLowerCase();

  switch (methodId) {
    case '0xfa77983e':
      return 'mintNft (pancake)';
    case '0xfd825f58':
      return 'createProfile (pancake)';
    case '0xab834bab':
      return 'atomicMatch (opensea)';
    default:
      return methodId;
  }
}
