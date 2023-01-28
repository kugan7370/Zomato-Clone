import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Popular({ popularFood }) {
    const [isLiked, setIsLiked] = useState(true)
    const itemName = popularFood.name
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("details", { foodDetail: popularFood })} className="relative mr-2 h-40 w-52 justify-center items-center  rounded-xl">
            <Image className='h-full w-full rounded-xl object-cover' source={{ uri: popularFood.image }} />
            <View className='flex-row justify-between items-center absolute bottom-3 right-4 left-4'>
                <Text className="text-white  font-bold">{itemName.length < 8 ? itemName : itemName.slice(0, 8) + "..."}</Text>
                <Text className="text-yellow-500 font-bold">💰 {popularFood.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)} className="absolute right-4 top-2">
                <FontAwesome name={isLiked ? "heart" : "heart-o"} size={20} color="red" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}