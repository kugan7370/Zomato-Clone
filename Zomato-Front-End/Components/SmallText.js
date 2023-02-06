import { View, Text } from 'react-native'
import React from 'react'


export default function SmallText({ title }) {
    return (
        <View>
            <Text numberOfLines={4} className="text-xs font-poppins text-slate-600">{title}</Text>
        </View>
    )
}