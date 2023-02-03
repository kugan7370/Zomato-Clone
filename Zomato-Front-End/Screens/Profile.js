import { View, Text, Image, Pressable, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import BigText from '../Components/BigText'
import { MaterialIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../Redux/UserSlicer';
import { clearFavourite } from '../Redux/FavoriteSlicer';
import { removeToken } from '../Redux/utils/getToken';

export default function Profile() {
    const { user, token } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const userLogout = async () => {
        dispatch(logout())
        dispatch(clearFavourite())
        removeToken()
        navigation.navigate("signin")
    }










    return (
        <View className="mt-8">
            <View className="h-72 rounded-b-3xl overflow-hidden">
                <ImageBackground className="w-full h-full" source={{ uri: "https://img.freepik.com/free-vector/abstract-background-with-monochrome-low-poly-design_1048-14453.jpg?w=2000" }}>
                    {/* header */}
                    <View className="flex-row justify-center mt-4 items-center">
                        <BigText title={"Profile"} />
                    </View >

                    {/* profile details */}
                    <View className="justify-center mt-4 items-center">
                        <View className="w-40 h-40 rounded-full  overflow-hidden border border-primary-100">
                            <Image className="h-full w-full" source={{ uri: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg" }} />
                        </View>
                        <View className="mt-2">
                            <BigText title={user?.name} />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* profile lists */}
            <View className="mx-6 mt-12">
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <AntDesign name="profile" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Edit Profile</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <Ionicons name="md-home" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Delivery address</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('orderHistory')} className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <Feather name="shopping-bag" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >History of orders</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <Ionicons name="notifications-circle-outline" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Notification</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <TouchableOpacity onPress={userLogout} className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <MaterialIcons name="logout" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Logout</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </TouchableOpacity>
            </View>




        </View>
    )
}