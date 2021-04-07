import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import Item from "../screen/ItemDetails";

const Stack = createStackNavigator();


export default () => (
  <Stack.Navigator>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="About" component={Item} />
  </Stack.Navigator>
);