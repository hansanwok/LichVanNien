import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './navigator/RootNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
