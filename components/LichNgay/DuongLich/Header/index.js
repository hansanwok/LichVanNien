import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends PureComponent {

  render() {
    const { currentMoment } = this.props;
    return (
      <View style={styles.container}>
        <Text>{currentMoment.format('LLLL')}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
})
