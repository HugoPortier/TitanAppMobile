import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from "./HomeStack";
import Drawer from "./RootDrawer";
export default ()=> (
<NavigationContainer>
    {/* <HomeStack /> */}
    <Drawer/>
</NavigationContainer>
);