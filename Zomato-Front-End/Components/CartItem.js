import { View, Text, Image } from 'react-native'
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
        <View className="flex-row items-center justify-between mb-4 shadow-lg bg-slate-50 pr-4 rounded-lg">
            {/* image */}
            <View className="w-24 h-24">
                <Image className="h-full w-full rounded-xl" source={{ uri: "https://thumbs.dreamstime.com/b/pancakes-breakfast-served-blueberries-strawberries-maple-syrup-80097189.jpg" }} />
            </View>

            {/* name and quantity */}

            <View >
                <Text className="font-bold mb-4 text-center">Food Name</Text>
                <View className="flex-row justify-between items-center w-32  py-2 px-4 rounded-2xl">
                    <Entypo onPress={() => handleQuantity('mini')} name="minus" size={20} color="black" />
                    <Text className="font-bold">{quantity}</Text>
                    <MaterialIcons onPress={() => handleQuantity('add')} name="add" size={20} color="black" />
                </View >

            </View>
            <Text className="font-bold">$ 30.00</Text>

            {/* price */}
        </View>
    )
}