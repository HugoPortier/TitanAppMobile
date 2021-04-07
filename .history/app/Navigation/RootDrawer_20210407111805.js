import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Item from '../screen/ItemDetails'

const Drawer = createDrawerNavigator()

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="item" component={Item} />
  </Drawer.Navigator>
);