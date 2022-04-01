import { DefaultProps } from '../default-props';
import { UiElement } from '../ui-element';

export function Avatar(props: AvatarProps): UiElement {
  return {
    _type: 'Avatar',
    props: props ?? {},
  };
}

export interface AvatarProps extends DefaultProps {
  readonly color?: string;
  readonly icon: string;
  readonly size?: 'sm' | 'lg' | 'xl';
}
