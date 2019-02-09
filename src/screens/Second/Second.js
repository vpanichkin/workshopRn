
// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import sharedStyle from '../../shared/styles';
import style from './style';

type Props = {};
type State = {};

class Second extends Component<Props, State> {

  render() {
    return (
      <View style={sharedStyle.container}>
        <Text style={sharedStyle.text}>Second</Text>
      </View>
    );
  }
}

export default Second;
