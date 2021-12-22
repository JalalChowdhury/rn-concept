import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import GoalInput from './Components/GoalInput/GoalInput';
import Home from './Pages/Home/Home';

import { StyleSheet, Text, View, AppRegistry, ScrollView } from "react-native";
import ColorScreen from './Components/ColorScreen/ColorScreen';
import FlexMama from './Components/FlexMama/FlexMama';



export default function App() {


  return (
    <ScrollView>
        <Home></Home>
        <ColorScreen></ColorScreen>
        <FlexMama />
    </ScrollView>
  );

 
   
 
}




