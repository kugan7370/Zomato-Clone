import { View, Text, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import BigText from '../Components/BigText'
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
export default function Profile() {
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
                            <BigText title={"Adam John"} />
                        </View>
                    </View>
                </ImageBackground>
            </View>



            {/* profile lists */}
            <View className="mx-6 mt-12">
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <Feather name="shopping-bag" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >History of orders</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <Ionicons name="md-home" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Delivery address</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <MaterialIcons name="payment" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Payments</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <Ionicons name="notifications-circle-outline" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Notification</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
                <Pressable className='flex-row items-center bg-[#f8f8f8] rounded-lg py-3 px-4 mb-4'>
                    <MaterialIcons name="logout" size={24} color="#e21414" />
                    <Text className="text-lg font-bold ml-4 flex-1" >Logout</Text>
                    <MaterialIcons className="ml-auto" name="arrow-forward-ios" size={24} color="#e21414" />
                </Pressable>
            </View>




        </View>
    )
}