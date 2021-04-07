import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Item from "../screen/ItemDetails";
import BottomTabs from "./BottomTabs";
const Stack = createStackNavigator();


export default () => (
  <Stack.Navigator>
    <Stack.Screen name="home" children={BottomTabs} />
    <Stack.Screen name="ItemDetails" component={Item} />
  </Stack.Navigator>
);