import { UiElement } from 'src/ui';
import { DocumentDto } from '..';

export type PageRouteDto = Readonly<{
  element: UiElement;
}> &
  DocumentDto;
