import { DefaultProps } from './default-props';

export type UiElement = Readonly<{
  _type: string;
  props?: DefaultProps;
}>;
