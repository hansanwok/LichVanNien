import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LichThang extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Lịch Tháng',
  });

  render() {
    return(
      <View>
        <Text>
          Lich Thang
        </Text>
      </View>
    );
  }
}
