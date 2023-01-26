import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';

import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Cart from '../Screens/Cart';
import Saved from '../Screens/Favorites';
import Profile from '../Screens/Profile';
const Stack = createNativeStackNavigator();
export default function RootNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="home" component={BottomTapNavigation} />
            <Stack.Screen name="details" component={Details} />
            <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
    )
}



const Tab = createBottomTabNavigator();

export function BottomTapNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 60, padding: 10 }, }}>
            <Tab.Screen name="Home" component={Home} options={{

                tabBarIcon: ({ color, size, focused }) => (
                    <Entypo name="home" size={24} color={focused ? 'red' : "black"} />
                )
            }} />
            <Tab.Screen name="Favorites" component={Saved} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Entypo name="heart" size={24} color={focused ? 'red' : "black"} />
                )
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome5 name="cart-plus" size={22} color={focused ? 'red' : "black"} />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Entypo name="user" size={24} color={focused ? 'red' : "black"} />
                )
            }} />
        </Tab.Navigator>
    )
}