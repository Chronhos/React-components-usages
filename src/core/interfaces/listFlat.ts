import {MenuUI} from './';
import {RouteType} from '../types';

export interface ListFlat {
  list: MenuUI[];
  navigateTo: (route: RouteType) => void;
}
