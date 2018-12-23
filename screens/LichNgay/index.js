import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LichNgay extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Lịch Ngày',
  });

  render() {
    return (
      <View>
        <Text>
          Lich Ngay
        </Text>
      </View>
    );
  }
}
