import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './list';
import {RoutesName} from '../enum';

export type HomeScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.home
>;
export type NavigateScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.navigate
>;
export type StateScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.state
>;
export type EffectScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.effect
>;
export type FetchScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.fetch
>;

/**
 * Navigate routes
 */
export type ProfilePageScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.profile
>;
export type AboutPageScreen = StackNavigationProp<
  RootStackParamList,
  RoutesName.about
>;
