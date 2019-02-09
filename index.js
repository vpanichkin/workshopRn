/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createBottomTabNavigator, createTabNavigator, createAppContainer } from "react-navigation";

import FeedScreen from './src/screens/Feed';
import SecondScreen from './src/screens/Second';
import ThirdScreen from './src/screens/Third';

import { name as appName } from './app.json';

const TabNavigator = createBottomTabNavigator({
  Home: FeedScreen,
  Second: SecondScreen,
  Third: ThirdScreen,
}, {
  tabBarOptions: {
    tabStyle: {
    },
    labelStyle: {
      fontSize: 20,
    },
    style: {
    },
  },
});

AppRegistry.registerComponent(appName, () => createAppContainer(TabNavigator));
