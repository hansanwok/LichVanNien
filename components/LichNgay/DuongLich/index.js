import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import Header from './Header';
import Blossom from '../../../assets/images/background/sunset.jpeg';


export default class DuongLich extends PureComponent {

  render() {
    const { currentMoment } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground source={Blossom} style={styles.backgroundImage}>
          <Header {...this.props} />
          <View style={styles.innerContainer}>
            <Text>{currentMoment.format('LTS')}</Text>
          </View>
        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '88%'
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  innerContainer: {
    alignItems: 'center',
  }
})
