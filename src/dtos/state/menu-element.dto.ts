import { DocumentDto } from '..';

export type MenuElementDto = Readonly<{
  children?: Readonly<MenuElementDto[]>;
  icon?: string;
  navLink: string;
  title: string;
}> &
  DocumentDto;
