import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BigText from '../Components/BigText'
import FoodList from '../Components/FoodList'

export default function Favorites() {
    return (
        <View>
            {/* title */}
            <View className="flex-row justify-center mt-4 items-center">
                <BigText title={"Your Food Cart"} />
            </View >

            {/* food details */}
            <ScrollView className="mt-8 px-4">
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
            </ScrollView>
        </View>
    )
}