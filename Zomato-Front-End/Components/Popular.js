import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addLikeFoods, handleLike } from '../Redux/FavoriteSlicer';
import { useDispatch, useSelector } from 'react-redux';
export default function Popular({ popularFood }) {
    const itemName = popularFood.name
    const [isLiked, setIsLiked] = useState()
    const { favorite } = useSelector((state) => state?.favorite)
    const { user, token } = useSelector((state) => state.user)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const handelLikes = async (foodData) => {
        dispatch(handleLike(foodData))
        setIsLiked(!isLiked)
        await addLikeFoods(foodData._id)

    }

    useEffect(() => {
        const isLikedItem = favorite?.find((item) => item._id === popularFood?._id)
        if (isLikedItem) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }
    }, [favorite])

    return (
        <TouchableOpacity onPress={() => navigation.navigate("details", { foodDetail: popularFood })} className="relative mr-2 h-48 w-72 justify-center items-center  rounded-xl">
            <Image className='h-full w-full rounded-xl object-cover' source={{ uri: popularFood.image }} />
            <View className='flex-row justify-between items-center absolute bottom-3 right-4 left-4'>
                <Text className="text-white  font-poppinsSemiBold">{itemName.length < 8 ? itemName : itemName.slice(0, 8) + "..."}</Text>
                <Text className="text-yellow-500  font-poppinsSemiBold">💰 {popularFood.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => handelLikes(popularFood)} className="absolute right-4 top-2">
                <FontAwesome name={isLiked ? "heart" : "heart-o"} size={20} color="red" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}