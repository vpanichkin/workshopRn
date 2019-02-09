
// @flow
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import MovieThumb from '../MovieThumb';

import style from './style';
import sharedStyle from '../../shared/style';

type Props = {};
type State = {};

class MoviesList extends Component<Props, State> {

  renderMovieThumbNail = (item, index) => (
    <MovieThumb key={index} {...item} style={{flex: 1}} />
  );

  render() {
    const { data, loading } = this.props;
    if (loading) return <ActivityIndicator size="large" color="blue" />
    if (!data || !data.length) return null;
    return (
      <ScrollView>
        {data.map(this.renderMovieThumbNail)}
      </ScrollView>
    );
  }
}

export default MoviesList;
