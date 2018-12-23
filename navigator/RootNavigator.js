import { createStackNavigator, createAppContainer } from 'react-navigation';

import BottomNavigator from './BottomNavigator';

const AppNavigator = createStackNavigator(
  {
    BottomNavigator,
  },
  {
    initialRouteName: 'BottomNavigator',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
    })
  });

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
