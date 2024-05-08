import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ListComponent} from '../../components';
import {NavigateListPages} from '../../../core/json';
import {NavigateScreen, RouteType} from '../../../core/types';

export const NavigationHookExamplePage = () => {
  const {navigate} = useNavigation<NavigateScreen>();
  const navigateTo = (route: RouteType) => {
    console.log('====================================');
    console.log(route);
    console.log('====================================');
    navigate(route);
  };
  return (
    <View>
      <View style={styles.border} />
      <ListComponent list={NavigateListPages} navigateTo={navigateTo} />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    marginVertical: 5,
  },
});
