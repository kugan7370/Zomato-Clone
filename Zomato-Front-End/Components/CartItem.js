import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem } from '../Redux/CartSlicer';


export default function CartItem({ cartItem }) {
    const dispatch = useDispatch()






    const handleQuantity = (type) => {
        if (type === 'add') {
            dispatch(incrementItem({
                foodId: cartItem.foodId,
            }))
        } else {
            dispatch(decrementItem({
                foodId: cartItem.foodId,
            }))

        }
    }

    return (
        <View className="flex-row items-center  mb-4 bg-slate-50 pr-4 rounded-lg">
            {/* image */}
            <View className="w-24 h-24">
                <Image className="h-full w-full rounded-xl" source={{ uri: cartItem.image }} />
            </View>

            {/* name and quantity */}

            <View className="ml-6" >
                <Text className="font-bold mb-4 text-center capitalize">{cartItem.name}</Text>
                <View className="flex-row justify-between items-center w-32  py-2 px-4 rounded-2xl">
                    <TouchableOpacity className="w-6 h-6 rounded-md justify-center items-center border border-1 border-gray-300" onPress={() => handleQuantity('mini')}>
                        <Entypo name="minus" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="font-bold">  {cartItem.price} x {cartItem.quantity}  </Text>
                    <TouchableOpacity className="w-6 h-6 rounded-md justify-center items-center border border-1 border-gray-300" onPress={() => handleQuantity('add')} >
                        <MaterialIcons name="add" size={20} color="black" />
                    </TouchableOpacity>
                </View >

            </View>
            <Text className="font-bold ml-auto">$ {cartItem.price * cartItem.quantity}</Text>

            {/* price */}
        </View>
    )
}