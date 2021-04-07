import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import BottomTabs from "./BottomTabs";
const Stack = createStackNavigator();


export default () => (
  <Stack.Navigator>
    <Stack.Screen name="home" children={BottomTabs} />
    <Stack.Screen name="About" component={Item} />
  </Stack.Navigator>
);