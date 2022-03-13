import { DefaultProps } from '../default-props';
import { UiElement } from '../ui-element';

export function Div(props?: DivProps): UiElement {
  return {
    _type: 'Div',
    props,
  };
}

export interface DivProps extends DefaultProps {
  children?: UiElement[];
}
