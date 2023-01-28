import { View, Text } from 'react-native'
import React from 'react'

export default function BigText({ title }) {
    return (
        <View>
            <Text className="text-lg font-bold capitalize">{title}</Text>
        </View>
    )
}