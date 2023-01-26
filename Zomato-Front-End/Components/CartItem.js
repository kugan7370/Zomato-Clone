import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';


export default function CartItem() {
    const [quantity, setQuantity] = useState(1)


    const handleQuantity = (type) => {
        if (type === 'add') {
            setQuantity(quantity + 1)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    return (
        <View className="flex-row items-center justify-between mb-4 bg-slate-50 pr-4 rounded-lg">
            {/* image */}
            <View className="w-24 h-24">
                <Image className="h-full w-full rounded-xl" source={{ uri: "https://thumbs.dreamstime.com/b/pancakes-breakfast-served-blueberries-strawberries-maple-syrup-80097189.jpg" }} />
            </View>

            {/* name and quantity */}

            <View >
                <Text className="font-bold mb-4 text-center">Food Name</Text>
                <View className="flex-row justify-between items-center w-32  py-2 px-4 rounded-2xl">
                    <TouchableOpacity className="w-6 h-6 rounded-md justify-center items-center border border-1 border-gray-300" onPress={() => handleQuantity('mini')}>
                        <Entypo name="minus" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="font-bold">{quantity}</Text>
                    <TouchableOpacity className="w-6 h-6 rounded-md justify-center items-center border border-1 border-gray-300" onPress={() => handleQuantity('add')} >
                        <MaterialIcons name="add" size={20} color="black" />
                    </TouchableOpacity>
                </View >

            </View>
            <Text className="font-bold">$ {30.00 * quantity}</Text>

            {/* price */}
        </View>
    )
}