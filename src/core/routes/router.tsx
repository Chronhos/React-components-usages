import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationHookExamplePage} from '../../modules/pages/NavigationHookExample/NavigationHookExample';
import {StateHookExamplePage} from '../../modules/pages/StateHookExample/StateHookExample';
import {EffectHookExamplePage} from '../../modules/pages/EffectHookExample/EffectHookExample';
import {HomePage} from '../../modules/pages/home/Home';
import AboutPage from '../../modules/pages/NavigationHookExample/about/About';
import ProfilePage from '../../modules/pages/NavigationHookExample/profile/Profile';
import {Messages, RoutesName} from '../enum';
import {HeaderPrivateStyles, HeaderPublicStyles} from '../styles';
import FetchHookExamplePage from '../../modules/pages/FetchHookExample/FetchHookExample';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RoutesName.home}>
        <Stack.Group screenOptions={HeaderPublicStyles}>
          <Stack.Screen
            name={RoutesName.home}
            component={HomePage}
            options={{title: Messages.home}}
          />
        </Stack.Group>
        <Stack.Group screenOptions={HeaderPrivateStyles}>
          <Stack.Screen
            name={RoutesName.navigate}
            component={NavigationHookExamplePage}
            options={{title: Messages.navigate}}
          />
          <Stack.Screen
            name={RoutesName.state}
            options={{title: Messages.state}}>
            {() => <StateHookExamplePage initialState={0} />}
          </Stack.Screen>
          <Stack.Screen
            name={RoutesName.effect}
            component={EffectHookExamplePage}
            options={{title: Messages.effect}}
          />
          <Stack.Screen
            name={RoutesName.fetch}
            component={FetchHookExamplePage}
            options={{title: Messages.fetch}}
          />
        </Stack.Group>
        <Stack.Group screenOptions={HeaderPrivateStyles}>
          <Stack.Screen name={RoutesName.about} component={AboutPage} />
          <Stack.Screen name={RoutesName.profile} component={ProfilePage} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
