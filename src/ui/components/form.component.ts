import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

/**
 * Creates an Earn Keeper Protocol object with the given properties
 *
 * @param props component properties
 * @returns a ekp component object
 */
export function Form(props: FormProps): UiElement {
  return {
    _type: 'Form',
    props,
  };
}

/**
 * Properties for the {@link Form} component
 */
export type FormProps = DefaultProps &
  Readonly<{
    /**
     * @description the child components of this form
     */
    children: UiElement[];
    /**
     * @todo
     */
    multiRecord?: MultiRecordConfig;
    /**
     * @description the name of the form, can be referenced later
     */
    name: Rpc | string;
    /**
     * @description an {@link Rpc} object to be run when the form is submitted
     * @default undefined
     * @example { method: 'navigate', params: ['/home'] }
     */
    onSubmit?: Rpc;
    /**
     * @description the JSON Schema of the form, used for validation and defaults
     * @see https://json-schema.org/
     */
    schema: Record<string, any>;
  }>;

export type MultiRecordConfig = {
  idField: string;
};
