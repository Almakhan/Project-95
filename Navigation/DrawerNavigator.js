import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "./TabNavigator";
import Setting from "../Screens/Setting";

const Drawer= createDrawerNavigator()

const DrawerTabNavigator=()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator}/>
    <Drawer.Screen name="Setting" component={Setting}/>
    </Drawer.Navigator>
  )
}
export default DrawerTabNavigator;