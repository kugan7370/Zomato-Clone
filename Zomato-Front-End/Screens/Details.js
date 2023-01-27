import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { PrimaryColor } from '../constants/Colors';
import SmallText from '../Components/SmallText';
import { useNavigation } from '@react-navigation/native';


export default function Details() {
    const [quantity, setQuantity] = useState(1)
    const navigation = useNavigation();


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
        <View className="px-4">
            {/* header */}
            <View className="flex-row justify-between items-center mt-4">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={PrimaryColor} />
                </TouchableOpacity>
                <AntDesign name="heart" size={24} color={PrimaryColor} />
            </View>


            {/* Image */}
            <View className="justify-center items-center mt-5 ">
                <View className="h-72 w-72">
                    <Image className="h-full w-full rounded-full object-contain shadow-2xl" source={{ uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" }} />
                </View>
            </View>

            {/* increment and decrement */}
            <View className="justify-center items-center mt-4">
                <View className="flex-row justify-between items-center w-36 bg-gray-50 py-2 px-4 rounded-2xl">
                    <Entypo onPress={() => handleQuantity('mini')} name="minus" size={26} color="black" />
                    <Text className="font-bold text-xl">{quantity}</Text>
                    <MaterialIcons onPress={() => handleQuantity('add')} name="add" size={26} color="black" />
                </View >
            </View>


            {/* header and price */}
            <View className="mt-5 px-4">
                <View className="flex-row justify-between items-center">
                    <Text className="font-bold text-xl">Chicken</Text>
                    <Text className="font-bold text-lg">
                        <Text className="font-bold text-lg">💰  </Text>
                        20.00
                    </Text>
                </View>
            </View>


            {/* description */}
            <ScrollView className="mt-5 px-4 h-32">
                <Text className="text-justify">publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</Text>
            </ScrollView>


            {/* feedback */}
            <View className="mt-5 px-4">
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text>⭐  4.9</Text>
                    </View>
                    <View>
                        <Text>🔥  4.75g  |  79.8 kcl</Text>
                    </View>
                    <View>
                        <Text>⏰  7-8min</Text>
                    </View>
                </View>
            </View>




            {/* addcart button */}
            <View className='justify-center item-center bg-primary-100 py-2 px-4 mt-8 rounded-xl'>
                <Text className="text-lg font-bold text-center text-white">Add to cart</Text>
            </View>



        </View>

    )
}