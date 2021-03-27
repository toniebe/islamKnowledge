import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';
import QuranScreen from '../screen/QuranScreen';
import ExitScreen from '../screen/ExitScreen';
import HomeLogo from '../assets/icon/home.png';
import QuranLogo from '../assets/icon/quran.png';
import LogoutLogo from '../assets/icon/exit.png';
import QuranDetailScreen from '../screen/QuranDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? '#5C68D3' : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{
          width: 25,
          height: 25,
          tintColor: colorSelected,
        }}
      />
    </View>
  );
};

const Dashboard = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => {
            return <Text style={{fontSize: 10}}>Beranda</Text>;
          },
          tabBarIcon: (props) => {
            return <IconBottom data={props} image={HomeLogo} />;
          },
        }}
      />
      <Tab.Screen
        name="Quran"
        component={QuranScreen}
        options={{
          tabBarLabel: () => {
            return <Text style={{fontSize: 10}}>Quran</Text>;
          },
          tabBarIcon: (props) => {
            return <IconBottom data={props} image={QuranLogo} />;
          },
        }}
      />
      <Tab.Screen
        name="Exit"
        component={ExitScreen}
        options={{
          tabBarLabel: () => {
            return <Text style={{fontSize: 10}}>Exit</Text>;
          },
          tabBarIcon: (props) => {
            return <IconBottom data={props} image={LogoutLogo} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuranDetail"
        component={QuranDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
