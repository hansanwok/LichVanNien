import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import moment from 'moment';

import DuongLich from '../../components/LichNgay/DuongLich';

export default class LichNgay extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Lịch Ngày',
  });

  constructor(props) {
    super(props);

    this.state = {
      currentMoment: moment()
    }
  }

  render() {
    const { currentMoment } = this.state;

    return (
      <View>
        <StatusBar hidden />
        <DuongLich currentMoment={currentMoment} />
      </View>
    );
  }
}
