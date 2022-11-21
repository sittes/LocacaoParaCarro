//import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider} from 'styled-components'
//import Icon from 'react-native-vector-icons/AntDesign'
//import { StatusBar,Image,StyleSheet, View,Text} from 'react-native';
import themeApp from "./src/styles/theme";
//import {CarDetails} from './src/screens/CarDetails';
import {Routes} from './src/routes';
// import {SchedulingComplete} from './src/screens/SchedulingComplete';
//import {SchedulingDetails} from './src/screens/SchedulingDetails';
//import Home from './src/screens/Home';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function App() {
  return (
    <ThemeProvider theme={themeApp}>
           <Routes/>
    </ThemeProvider>
  );
}



//npm install native-base --save
