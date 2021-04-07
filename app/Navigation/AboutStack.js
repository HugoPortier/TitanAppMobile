import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screen/About";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);
