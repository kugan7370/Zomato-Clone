import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import BigText from './BigText'
import SmallText from './SmallText'

export default function FoodList() {
    const [isLiked, setIsLiked] = useState(true)
    return (
        <View className="flex-row justify-center item-start gap-4 shadow-lg mb-4">
            <View className='h-36 w-32'>
                <Image className="w-full h-full object-fill  rounded-l-3xl " source={{ uri: 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591' }} />
            </View>
            <View className="space-y-2 flex-1">
                <BigText title={"Food Title"} />
                <SmallText title={"publishing and graphic design, Lorem ipsum is a placeholder text commonly used "} />
                <View>
                    <View className='flex-row justify-between items-center '>
                        <Text className="text-yellow-500  font-bold">💰 490.00</Text>
                        <TouchableOpacity onPress={() => setIsLiked(!isLiked)} className="absolute right-4 top-2">
                            <FontAwesome name={isLiked ? "heart" : "heart-o"} size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}