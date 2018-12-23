import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LichNam extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Lịch Năm',
  });

  render() {
    return(
      <View>
        <Text>
          Lich Nam
        </Text>
      </View>
    );
  }
}
