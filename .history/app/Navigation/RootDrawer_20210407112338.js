import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";


const Drawer = createDrawerNavigator()

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="item" children={HomeStack} />
    <Drawer.Screen name="item" children={AboutStack} />
  </Drawer.Navigator>
);