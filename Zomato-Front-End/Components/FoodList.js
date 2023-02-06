import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import BigText from './BigText'
import SmallText from './SmallText'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addLikeFoods, addToFavorite, clearFavourite, handleLike, removeFromFavorit } from '../Redux/FavoriteSlicer';

export default function FoodList({ FoodList }) {
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
        const isLikedItem = favorite?.find((item) => item._id === FoodList?._id)
        if (isLikedItem) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }
    }, [favorite])


    return (
        <Pressable onPress={() => navigation.navigate('details', { foodDetail: FoodList })} className="flex-row justify-center item-start gap-4 shadow-lg mb-4 border border-[2] border-gray-50">
            <View className='h-36 w-32'>
                <Image className="w-full h-full object-fill  rounded-l-3xl " source={{ uri: FoodList?.image }} />
            </View>
            <View className="space-y-2 flex-1 ">
                <BigText title={FoodList?.name} />
                <SmallText title={FoodList?.description} />
                <View>
                    <View className='flex-row justify-between items-center '>
                        <Text className="text-yellow-500  font-poppinsSemiBold">💰 {FoodList?.price.toFixed(2)}</Text>
                        <TouchableOpacity onPress={() => handelLikes(FoodList)} className="absolute right-4 top-2">
                            <FontAwesome name={isLiked ? "heart" : "heart-o"} size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}