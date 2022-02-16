import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Form(props: FormProps): UiElement {
  return {
    _type: 'Form',
    props,
  };
}

export interface FormProps extends DefaultProps {
  readonly name: Rpc | string;
  readonly schema: Record<string, any>;
  readonly child: UiElement;
}
