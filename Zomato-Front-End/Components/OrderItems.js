import { View, Text, Image } from 'react-native'
import React from 'react'

export default function OrderItems({ orderItems }) {
    console.log("orderItems=======>", orderItems);
    return (
        <View>
            <View className="flex-row items-center  mb-4 bg-slate-50 p-4 rounded-lg">
                {/* image */}
                <View className="w-16 h-16">
                    <Image className="h-full w-full rounded-xl" source={{ uri: orderItems?.image }} />
                </View>

                {/* name and quantity */}

                <View className="ml-6 flex-1" >
                    <Text className="font-bold mb-4 capitalize">{orderItems?.name}</Text>
                    <View className="flex-row justify-between items-center">
                        <Text className="font-semibold text-xs text-gray-600">${orderItems?.price.toFixed(2)}</Text>
                        <Text className="font-semibold text-xs text-gray-600">qty:{orderItems?.quantity}</Text>
                        <Text className="font-semibold text-xs">$ {(orderItems?.price * orderItems?.quantity).toFixed(2)}</Text>
                    </View >

                </View>



            </View>
        </View>
    )
}