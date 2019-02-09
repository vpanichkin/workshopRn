/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import AppNavigator from "./containers/navigation";

const AppContainer = createAppContainer(AppNavigator);

type Props = {};

export default AppContainer;
