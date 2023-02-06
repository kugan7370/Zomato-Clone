import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import BigText from '../Components/BigText';
import { PrimaryColor } from '../constants/Colors';
import CartItem from '../Components/CartItem';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const cartEmpyImage = "https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png"

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
            <ScrollView className="mt-6 h-[44%]" showsVerticalScrollIndicator={false}>
                {cartItems && cartItems.map((item, index) => <CartItem cartItem={item} key={index} />)}


            </ScrollView>


            {/* checkout */}

            {cartItems?.length > 0 ? <View>

                <View className="p-4 bg-slate-50 rounded-xl mt-6">
                    <View className="flex-row  mb-4 ">
                        <Text className="font-poppinsSemiBold text-lg  tracking-wider">Order Info</Text>

                    </View>
                    <View className="flex-row justify-between items-center mb-2 ">
                        <Text className="font-semibold font-poppins text-slate-400 tracking-wider">Sub total</Text>
                        <Text className="font-semibold font-poppins text-slate-400">$ {subTotal?.toFixed(2) ?? 0.00}</Text>
                    </View>
                    <View className="flex-row justify-between items-center mb-2 ">
                        <Text className="font-semibold font-poppins text-slate-400 tracking-wider">Delivery Fee</Text>
                        <Text className="font-semibold font-poppins text-slate-400">$ 0.00</Text>
                    </View>
                    <View className="flex-row justify-between items-center mb-2 ">
                        <Text className="font-semibold font-poppins text-slate-400 tracking-wider">Discount</Text>
                        <Text className="font-semibold font-poppins text-slate-400">$ 0.00</Text>
                    </View>

                    {/* <View className=" h-[1px] w-full bg-slate-500 my-1" /> */}
                    <View className="flex-row justify-between items-center mt-2 ">
                        <Text className=" font-poppinsSemiBold text-slate-900 text-lg tracking-wider">Total</Text>
                        <Text className="text-slate-900 font-poppins font-semibold text-lg">$ {subTotal?.toFixed(2) ?? 0.00}</Text>
                    </View>
                </View>

                {/* button */}
                <TouchableOpacity onPress={() => navigation.navigate("deliveryAddress", { totalPrice: subTotal?.toFixed(2) })} className='justify-center item-center bg-primary-100 py-2 px-4 mt-6 rounded-xl'>
                    <Text className="text-lg  font-poppins text-center text-white">Place to order</Text>
                </TouchableOpacity>
            </View> :
                <View className="flex-1 justify-center items-center">
                    <Image className="w-[80%] h-[250]" source={{ uri: cartEmpyImage }} />
                </View>
            }
        </View >
    )
}