import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { PrimaryColor } from '../constants/Colors';
import SmallText from '../Components/SmallText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCarts } from '../Redux/CartSlicer';


export default function Details() {
    const [quantity, setQuantity] = useState(1)
    const [isIOS, setIsIOS] = useState(false)

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const router = useRoute()
    const { foodDetail } = router.params


    //get cart details from state
    const { cartItems } = useSelector((state) => state?.cart)

    const handleQuantity = (type) => {
        if (type === 'add') {
            setQuantity(quantity + 1)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    useEffect(() => {
        if (Platform.OS === 'ios') {
            setIsIOS(true)
        }

        else {
            setIsIOS(false)
        }
    }, []);

    //add cart items
    const addCart = () => {
        dispatch(addCarts({
            foodId: foodDetail._id,
            name: foodDetail.name,
            price: foodDetail.price,
            image: foodDetail.image,
            quantity
        }))
        navigation.navigate('cart')

    }


    return (
        <View>
            {/* header */}

            {isIOS ? <View>
                <View className="flex-row justify-between items-center mt-4 absolute top-5 right-5 left-5 z-10">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color={PrimaryColor} />
                    </TouchableOpacity>
                    <AntDesign name="heart" size={24} color={PrimaryColor} />
                </View>



                <View className="justify-center items-center">
                    <View className="h-80 w-full  overflow-hidden">
                        <Image className="h-full w-full" source={{ uri: foodDetail.image }} />
                    </View>
                </View>

            </View> :

                <View className="mt-8 px-4">
                    <View className="flex-row justify-between items-center mt-4">
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color={PrimaryColor} />
                        </TouchableOpacity>
                        <AntDesign name="heart" size={24} color={PrimaryColor} />
                    </View>



                    <View className="justify-center items-center mt-5 ">
                        <View className="h-72 w-full rounded-2xl overflow-hidden">
                            <Image className="h-full w-full" source={{ uri: foodDetail.image }} />
                        </View>
                    </View>

                </View>}







            {/* increment and decrement */}
            <View className="justify-center items-center mt-4 px-4">
                <View className="flex-row justify-between items-center w-36 bg-gray-50 py-2 px-4 rounded-2xl">
                    <Entypo onPress={() => handleQuantity('mini')} name="minus" size={26} color="black" />
                    <Text className="font-bold text-xl">{quantity}</Text>
                    <MaterialIcons onPress={() => handleQuantity('add')} name="add" size={26} color="black" />
                </View >
            </View>


            {/* header and price */}
            <View className="mt-5 px-4">
                <View className="flex-row justify-between items-center">
                    <Text className="font-bold text-xl capitalize">{foodDetail.name}</Text>
                    <Text className="font-bold text-lg">
                        <Text className="font-bold text-lg">💰  </Text>
                        {foodDetail.price.toFixed(2)}
                    </Text>
                </View>
            </View>


            {/* description */}
            <ScrollView className={isIOS ? "mt-5 mx-4 h-48 " : "mt-5 mx-4 h-32 "}>
                <Text className="text-justify">{foodDetail.description}</Text>
            </ScrollView>


            {/* feedback */}
            <View className="mt-5 mx-4">
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text>⭐  {foodDetail.rating}</Text>
                    </View>
                    <View>
                        <Text>🔥  4.75g  |  79.8 kcl</Text>
                    </View>
                    <View>
                        <Text>⏰  {foodDetail.deliveryTime}min</Text>
                    </View>
                </View>
            </View>




            {/* addcart button */}
            <TouchableOpacity onPress={addCart} className='justify-center item-center bg-primary-100 py-2 mx-4 mt-8 rounded-xl'>
                <Text className="text-lg font-bold text-center text-white">Add to cart</Text>
            </TouchableOpacity>



        </View>

    )
}