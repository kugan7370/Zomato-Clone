import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import BigText from '../Components/BigText';
import { PrimaryColor } from '../constants/Colors';
import CartItem from '../Components/CartItem';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


export default function Cart() {
    const navigation = useNavigation();
    const { cartItems } = useSelector((state) => state.cart)
    const [subTotal, setsubTotal] = useState(0)

    useEffect(() => {
        const total = cartItems.reduce((a, b) => a + (b.price * b.quantity || 0), 0)
        setsubTotal(total)


    }, [cartItems])


    return (
        <View className="mx-6 mt-8">
            {/* header */}
            <View className="flex-row justify-center mt-4 items-center">
                <BigText title={"Your Food Cart"} />
            </View >

            {/* Cart items */}
            <ScrollView className="mt-6 h-[57%]" showsVerticalScrollIndicator={false}>
                {cartItems && cartItems.map((item, index) => <CartItem cartItem={item} key={index} />)}


            </ScrollView>


            {/* checkout */}

            <View className=" bg-black text-white p-4 rounded-xl mt-4">
                <View className="flex-row justify-between items-center mb-2 ">
                    <Text className="font-bold text-white tracking-wider">Item count</Text>
                    <Text className="text-white">{cartItems?.length ?? 0.00}</Text>
                </View>
                <View className="flex-row justify-between items-center mb-2 ">
                    <Text className="font-bold text-white tracking-wider">Sub total</Text>
                    <Text className="text-white">$ {subTotal?.toFixed(2) ?? 0.00}</Text>
                </View>
                <View className="flex-row justify-between items-center mb-2 ">
                    <Text className="font-bold text-white tracking-wider">Discount</Text>
                    <Text className="text-white">$ 0.00</Text>
                </View>

                <View className=" h-[1px] w-full bg-slate-500 my-1" />
                <View className="flex-row justify-between items-center mt-2 ">
                    <Text className="font-bold text-white text-xl tracking-wider">Total</Text>
                    <Text className="text-white text-xl">$ {subTotal?.toFixed(2) ?? 0.00}</Text>
                </View>
            </View>

            {/* button */}
            <View className='justify-center item-center bg-primary-100 py-2 px-4 mt-6 rounded-xl'>
                <Text className="text-lg font-bold text-center text-white">Proceed to pay</Text>
            </View>

        </View >
    )
}