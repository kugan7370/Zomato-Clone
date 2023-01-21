import { View, Text } from 'react-native'
import React from 'react'


export default function SmallText({ title }) {
    return (
        <View>
            <Text className="text-xs text-slate-600">{title}</Text>
        </View>
    )
}