import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import BigText from '../Components/BigText'
import { FontAwesome5 } from '@expo/vector-icons';
import { PrimaryColor } from '../constants/Colors';
import SmallText from '../Components/SmallText';
import MediumText from '../Components/MediumText';
import Status from '../Components/Status';
import Popular from '../Components/Popular';
import Categories from '../Components/Categories';
import FoodList from '../Components/FoodList';

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* header */}
                <View className="flex-row justify-between items-center px-4 ">
                    <View className="h-16 w-16 bg-primary-100 rounded-full justify-center items-center">
                        <Text className="font-bold text-center text-white p-2">Zomo</Text>
                    </View>
                    <View className="flex-1 ml-5">
                        <BigText title={"Deliciour asian food"} />
                        <SmallText title={"Sumo is watching hunger has no chance"} />
                    </View>

                    {/* <View>
                    <FontAwesome5 name="search" size={24} color={PrimaryColor} />
                </View> */}
                </View>


                {/* status */}

                <ScrollView className="mt-5 pl-4" horizontal showsHorizontalScrollIndicator={false}>
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                </ScrollView>



                {/* popular */}
                <View className="mt-5 ">
                    <View className="px-4">
                        <BigText title={"Popular"} />
                    </View>

                    <ScrollView className="mt-5 px-4" horizontal showsHorizontalScrollIndicator={false}>
                        <Popular />
                        <Popular />
                        <Popular />
                        <Popular />

                    </ScrollView>
                </View>


                {/* categories */}
                <View className="mt-5">
                    <View className="px-4" >
                        <BigText title={"Categories"} />
                    </View>

                    <ScrollView className="mt-5 px-4" horizontal showsHorizontalScrollIndicator={false} >
                        <Categories />
                        <Categories />
                        <Categories />
                        <Categories />
                    </ScrollView>

                </View>

                {/* food details */}
                <View className="mt-5 px-4">
                    <FoodList />
                    <FoodList />
                    <FoodList />
                    <FoodList />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}