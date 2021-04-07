import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";


const Stack = createStackNavigator();


export default () => (
  <Stack.Navigator>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);