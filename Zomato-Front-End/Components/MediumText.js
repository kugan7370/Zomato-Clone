import { View, Text } from 'react-native'
import React from 'react'

export default function MediumText({ title }) {
    return (
        <View>
            <Text className="text-base font-medium font-poppins">{title}</Text>
        </View>
    )
}