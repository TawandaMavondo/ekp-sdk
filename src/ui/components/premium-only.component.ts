import { DefaultProps } from '../default-props';
import { UiElement } from '../ui-element';

export function PremiumOnly(props: PremiumOnlyProps): UiElement {
  return {
    _type: 'PremiumOnly',
    props,
  };
}

export interface PremiumOnlyProps extends DefaultProps {
  child: UiElement;
  preview?: UiElement;
}
