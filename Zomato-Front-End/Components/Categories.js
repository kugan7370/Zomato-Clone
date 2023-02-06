import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

export default function Categories({ categories }) {
    return (
        <Pressable className='mr-8'>
            <View className="h-20 w-20 rounded-full overflow-hidden">
                <Image className="w-full h-full" source={{ uri: categories?.image }} />
            </View>
            <Text className="text-center font-poppinsSemiBold mt-4">{categories?.name}</Text>
        </Pressable>
    )
}