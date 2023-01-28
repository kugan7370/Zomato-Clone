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
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
export function RootNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="details" component={Details} />
            <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
    )
}



const Tab = createBottomTabNavigator();

export default function BottomTapNavigation() {
    const { cartItems } = useSelector((state) => state.cart)
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 60, padding: 10 }, }}>
            <Tab.Screen name="Home" component={RootNavigation} options={{

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
                    <View className='relative'>
                        <FontAwesome5 name="cart-plus" size={22} color={focused ? 'red' : "black"} />
                        {cartItems?.length > 0 && <View style={{ height: 15, width: 15, borderRadius: 7.5, justifyContent: "center", alignItems: "center", backgroundColor: "red", position: "absolute", top: -10, right: -10, }} >
                            <Text style={{ color: 'white', fontSize: 10 }}>{cartItems?.length}</Text>
                        </View>}
                    </View>
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