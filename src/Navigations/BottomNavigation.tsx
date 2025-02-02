import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Categories from '../Screens/Categories/Categories';
// import Profile from '../Screens/Account/Profile';
import CustomBottomNavigation from './CustomBottomNavigation';
import Home from '../Screens/HomeScreens/HomeScreen';
import TestScreen1 from '../Screens/TestScreens/TestScreen1';
import TestScreen2 from '../Screens/TestScreens/TestScreen2';
// import CustomBottomNavigation2 from "./CustomNavigation";
// import Cart from "../Screens/Cart/Cart"

const tabBar  = (props:BottomTabBarProps)=>{
    return(<CustomBottomNavigation {...props}/>);
};


const BottomNavigation = () => {
    // const userId = useSelector(state=>state.user.userData.id);
    // const authenticated = userId?true:false
    
    const Tab = createBottomTabNavigator();
    
   return (
    <Tab.Navigator
        screenOptions={{
            headerShown : false,
        }}
        initialRouteName={'Home'}
        tabBar={tabBar}
        // tabBar={props => <CustomBottomNavigation {...props} />}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Test1" component={TestScreen1} />
        <Tab.Screen name="Test2" component={TestScreen2} />
    </Tab.Navigator>
);
   
};

export default BottomNavigation;

