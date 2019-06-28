import React from "react";
import HomeIconWithBadge from './icon'
import DetailsScreen from './pages/DetailsScreen'
import HomeScreen from './pages/HomeScreen'
import Test from './pages/Test'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Details') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarLabel: (data) => {
        const { routeName } = navigation.state;
        console.log(data);
        let name = ''
        switch (routeName) {
          case 'Home':
            name = '首页'
            break;
          case 'Details':
            name = '其他页'
            break;
        
          default:
            break;
        }
        return <Text style={{color:data.tintColor}}>{name}</Text>
      }
    }),
    tabBarOptions: {
      // activeTintColor: 'tomato',
      // inactiveTintColor: 'gray',
    },
  });
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator, // TabNavigator就是通过createBottomTabNavigator创建的底部导航
      navigationOptions: {
        header: null
      }
    },
    Details: DetailsScreen,
    Test: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: Test,
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: {
        //此处可什么都不写，或者干脆不写navigationOptions:{}
      }
    },
  },
  {
    // headerMode: 'none',
  }
);

export default AppNavigator