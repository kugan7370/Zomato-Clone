import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

export default function Status() {
    return (
        <View className="relative mr-2 h-40 w-32 justify-center items-center  rounded-xl  border-2 border-red-500">
            <Image className='h-full w-full rounded-xl object-cover' source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' }} />
            <Text className="text-white text-center items-center absolute   font-bold text-2xl  ">Image</Text>
        </View>
    )
}