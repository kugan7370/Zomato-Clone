import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BigText from '../Components/BigText'


//const orderImage = 'https://cdni.iconscout.com/illustration/premium/thumb/delivery-man-deliver-order-package-on-a-scooter-3455460-2923923.png?f=webp'
const orderImage = 'https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-5115435-4273317.png'

export default function OrderSuccess() {
    return (
        <View className="mx-10 mt-8 flex-1 ">
            {/* header */}
            <View className="flex-row justify-center mt-4 items-center">
                <Text className="text-lg font-poppinsSemiBold">THANK YOU!</Text>
            </View >

            {/* order success */}
            <View className="justify-center items-center mt-20">
                <Image className="w-full h-[300]" source={{ uri: orderImage }} />
                <Text className="text-lg w-[80%] mt-8 text-center font-poppins">Your order has been accepted </Text>
                <Text className="text-xs text-gray-400 w-[80%] mt-8 text-center font-poppins">Your items has been placed and is on it'way to being process</Text>

            </View >

            <View className="absolute bottom-20 right-5 left-5">
                <TouchableOpacity className='justify-center item-center bg-primary-100 py-2 px-4 mt-6 rounded-xl'>
                    <Text className="text-lg  font-poppins text-center text-white">Track order</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}