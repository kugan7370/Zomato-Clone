import { View, Text, Image } from 'react-native'
import React from 'react'
import BigText from '../Components/BigText'

const orderImage = 'https://cdni.iconscout.com/illustration/premium/thumb/delivery-man-deliver-order-package-on-a-scooter-3455460-2923923.png?f=webp'

export default function OrderSuccess() {
    return (
        <View className="mx-10 mt-8">
            {/* header */}
            <View className="flex-row justify-center mt-4 items-center">
                <Text className="text-lg font-bold font-poppins">THANK YOU!</Text>
            </View >

            {/* order success */}
            <View className="justify-center items-center h-[80%]">
                <Text className="text-base  text-center font-poppins">Your order has been placed! you will receive it soon... </Text>
                <Text className="text-base  text-center font-poppins mb-4">🎉🎉🎉</Text>
                <Image className="w-full h-[200]" source={{ uri: orderImage }} />

            </View >


        </View>
    )
}