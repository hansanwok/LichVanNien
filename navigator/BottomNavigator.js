import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import { createBottomTabNavigator } from 'react-navigation';

import LichNgay from '../screens/LichNgay';
import LichThang from '../screens/LichThang';
import LichNam from '../screens/LichNam';
import TodayIcon from '../components/Widget/TodayIcon';

export default createBottomTabNavigator({
  LichNam,
  LichNgay,
  LichThang,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'LichNgay') {
          return <TodayIcon focused={focused} tintColor={tintColor} horizontal={horizontal} />
        } else if (routeName === 'LichThang') {
          return <OcticonsIcons name={'calendar'} size={horizontal ? 20 : 25} color={tintColor} />;
        } else if (routeName === 'LichNam') {
          return <FontAwesomeIcons name={'calendar'} size={horizontal ? 20 : 22} color={tintColor} />;
        }
      },
    }),
    initialRouteName: 'LichNgay',
    tabBarOptions: {
      activeTintColor: '#00a4db',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontWeight: '500',
      },
      style: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
      },
    },

  });
