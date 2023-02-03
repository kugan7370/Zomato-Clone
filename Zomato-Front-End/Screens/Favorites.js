import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import BigText from '../Components/BigText'
import FoodList from '../Components/FoodList'
import { useSelector } from 'react-redux'
import Popular from '../Components/Popular'


export default function Favorites() {
    const { favorite } = useSelector((state) => state?.favorite)

    return (
        <View className="mt-8">
            {/* title */}
            <View className="flex-row justify-center mt-4 items-center">
                <BigText title={"Your Food Cart"} />
            </View >

            {/* food details */}
            <ScrollView showsVerticalScrollIndicator={false} className="mt-8 px-4">
                {favorite &&
                    favorite?.map((item) => <FoodList FoodList={item} key={item._id} />)
                }
            </ScrollView>
        </View>
    )
}