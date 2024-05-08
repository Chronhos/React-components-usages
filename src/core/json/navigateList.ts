import {Messages, RoutesName} from '../enum';
import {MenuUI} from '../interfaces';

export const NavigateListPages: MenuUI[] = [
  {
    id: 1,
    title: Messages.about,
    route: RoutesName.about,
  },
  {
    id: 2,
    title: Messages.profile,
    route: RoutesName.profile,
  },
];
