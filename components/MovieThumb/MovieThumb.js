
// @flow
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import style from './style';

type Props = {
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Poster: string;
};
type State = {};

class MovieThumb extends Component<Props, State> {
  render() {
    const { Title, Poster } = this.props;
    return (
      <View>
        <Text style={style.textBox}>{Title}</Text>
        <Image
          style={{width:50, height: 50}}
          source={{uri:Poster}} />
      </View>
    );
  }
}

export default MovieThumb;
