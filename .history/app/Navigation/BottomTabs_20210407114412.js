import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tab1 from "../screen/tabs/Tab1";
import Tab2 from "../screen/tabs/Tab2";
import Tab3 from "../screen/tabs/Tab3";


const BottomTab = createBottomTabNavigator();

export default ()=>{
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={Tab1} />
      <BottomTab.Screen name="Tab2" component={Tab2} />
      <BottomTab.Screen name="Tab3" component={Tab3} />
    </BottomTab.Navigator>
  );
}