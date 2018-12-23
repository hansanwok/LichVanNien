import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class TodayIcon extends PureComponent {
  render() {
    const { focused, tintColor, horizontal } = this.props;
    return (
      <View style={styles.container}>
        <Ionicons name={'ios-calendar'} size={horizontal ? 20 : 31} color={tintColor} />
        <Text style={[styles.dayNumber, { color: focused ? '#00a4db' : 'gray' }]}>
          {moment().format('DD')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 0.5
  },
  dayNumber: {
    fontSize: 12,
    marginLeft: -20,
    fontWeight: '600',
    marginTop: 5,
  }
});
