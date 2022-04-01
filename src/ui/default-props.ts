import { Rpc, When } from './rpc/types';

/**
 * Default properties available on all components
 *
 * Note some components don't support all of these properties
 * */
export type DefaultProps = Readonly<{
  /**
   * @description react classes to apply to the top level component
   * - some components may define additional className properties for child components, e.g. labelClassNames and inputClassNames
   * - bootstrap classes are supported through reactstrap
   * @see https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp
   * @default undefined // no extra class names
   * @example 'font-small-3'
   */
  className?: string | Rpc;
  /**
   * @description change the context of the current component from the default context to the result of the given expression
   * @default undefined
   * @example '$.someCollection'
   * @todo provide a better example for DefaultProps.context
   */
  context?: Rpc;
  /**
   * @description hide this component when this condition is false
   * @default undefined // never hidden
   * @example '$.someProperty'
   * @todo provide a better example for DefaultProps.when
   */
  when?: When;
  /**
   * @description tooltip text, a template or a component to show as a tooltip when hovering over this component
   * @default undefined
   * @example 'Click here to save the form'
   */
  tooltip?: string | Rpc;
}>;
