import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import Sunset from '../../assets/images/background/sunset.jpg'

export default class LichNgay extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Lịch Ngày',
  });

  render() {
    return (
      <View>
        {/* <ImageBackground source={Sunset} style={{ width: '100%', height: '100%' }}> */}
        <StatusBar hidden />
        <Text>
          Lich Ngay
        </Text>
        {/* </ImageBackground> */}
      </View>
    );
  }
}
