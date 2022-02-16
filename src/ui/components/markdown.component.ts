import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Markdown(props: MarkdownProps): UiElement {
  return {
    _type: 'Markdown',
    props,
  };
}

export interface MarkdownProps extends DefaultProps {
  content: string | Rpc;
}
