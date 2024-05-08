import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../../core/styles';
import {MenuListPages} from '../../../core/json';
import {ListComponent} from '../../components';
import {HomeScreen, RouteType} from '../../../core/types';
import {RoutesName} from '../../../core/enum';

const list = MenuListPages.filter(page => page.route !== RoutesName.home);

export const HomePage = () => {
  const {navigate} = useNavigation<HomeScreen>();
  const navigateTo = (route: RouteType) => {
    console.log('====================================');
    console.log('HOME_PAGE', route);
    console.log('====================================');
    navigate(route);
  };

  return (
    <View style={globalStyles}>
      <ListComponent list={list} navigateTo={navigateTo} />
    </View>
  );
};
