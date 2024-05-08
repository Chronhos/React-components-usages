import {MenuUI} from '../interfaces';
import {Messages, RoutesName} from '../enum';

export const MenuListPages: MenuUI[] = [
  {
    id: 1,
    title: Messages.titleNavigate,
    route: RoutesName.navigate,
  },
  {
    id: 2,
    title: Messages.titleState,
    route: RoutesName.state,
  },
  {
    id: 3,
    title: Messages.titleEffect,
    route: RoutesName.effect,
  },
  {
    id: 4,
    title: Messages.titleFetch,
    route: RoutesName.fetch,
  },
];
