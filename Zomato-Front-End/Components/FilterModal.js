import Modal from "react-native-modal";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Switch, KeyboardAvoidingView, } from 'react-native'
import React, { useState } from 'react'
import { PrimaryColor } from '../constants/Colors';
import { setIsDelivery, setIsRating, setMaxPrice, setMinPrice } from "../Redux/SwitchSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function FilterModal({ isModalVisibleStatus, toggleModalStatus, onFilterSubmit }) {
    const { isRating, isDelivery, isMaxPrice, isMinPrice } = useSelector((state) => state.switches)

    const [isModalVisible, setModalVisible] = useState(isModalVisibleStatus);
    const [isRatingEnabled, setIsRatingEnabled] = useState(isRating);
    const [isDeliveryTimeEnabled, setIsDeliveryTimeEnabled] = useState(isDelivery);

    // price range
    const [maxValue, setMaxValue] = useState(isMaxPrice)
    const [minValue, setMinValue] = useState(isMinPrice)

    const dispatch = useDispatch()

    //model handle
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        toggleModalStatus(!isModalVisible)


    };


    const applyFilter = () => {
        setModalVisible(!isModalVisible);
        toggleModalStatus(!isModalVisible)


        //filters
        if (minValue && !maxValue) {
            dispatch(setMinPrice(minValue))
            dispatch(setMaxPrice(null))
        }
        if (!minValue && maxValue) {
            dispatch(setMinPrice(null))
            dispatch(setMaxPrice(maxValue))
        }
        if (!minValue && !maxValue) {
            dispatch(setMaxPrice(null))
            dispatch(setMinPrice(null))
        }
        if (minValue && maxValue) {
            dispatch(setMaxPrice(maxValue))
            dispatch(setMinPrice(minValue))
        }
        //rating
        dispatch(setIsRating(isRatingEnabled))



        //delivery time
        dispatch(setIsDelivery(isDeliveryTimeEnabled))



    };


    // ratings

    const toggleRatingSwitch = (data) => {
        setIsRatingEnabled(data);

    }

    // delivery time
    const toggleDeliveryTimeSwitch = (data) => {
        setIsDeliveryTimeEnabled(data);
    }





    const deviceWidth = Dimensions.get("window").width;

    return (

        <Modal isVisible={isModalVisible} animationType="slide" style={{ margin: 0, justifyContent: "flex-end" }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <View style={{ backgroundColor: "white", height: 400, width: deviceWidth, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, marginTop: 10 }}>
                        <Text className="text-lg  font-poppinsSemiBold">Filter</Text>
                        <TouchableOpacity onPress={toggleModal} className="px-4">
                            <Text className="text-lg text-primary-100 font-poppinsBold">X</Text>
                        </TouchableOpacity>
                    </View>

                    {/* filter contents */}
                    <View className="mt-6">

                        {/* ratings */}
                        <View className="px-4 mb-4">
                            <View className="flex-row  items-center justify-between">
                                <Text className="text-base  font-poppinsSemiBold text-gray-600">Ratings</Text>
                                <Switch
                                    trackColor={{ false: "#f4f3f4", true: PrimaryColor }}
                                    thumbColor="#f4f3f4"
                                    ios_backgroundColor="#f4f3f4"
                                    onValueChange={toggleRatingSwitch}
                                    value={isRatingEnabled}
                                />
                            </View>
                        </View>

                        {/* delivery time */}
                        <View className="px-4 mb-4">
                            <View className="flex-row  items-center justify-between">
                                <Text className="text-base  font-poppinsSemiBold text-gray-600">Delivery Time</Text>
                                <Switch
                                    trackColor={{ false: "#f4f3f4", true: PrimaryColor }}
                                    thumbColor="#f4f3f4"
                                    ios_backgroundColor="#f4f3f4"
                                    onValueChange={toggleDeliveryTimeSwitch}
                                    value={isDeliveryTimeEnabled}
                                />
                            </View>
                        </View>

                        {/* price range */}
                        <View className="px-4 mb-4">
                            <View className="">
                                <Text className="text-base  font-poppinsSemiBold text-gray-600">Price Range</Text>

                                {/* price range slider */}
                                <View className="flex-row items-center justify-between mt-6">

                                    <TextInput value={minValue} placeholder='min' onChangeText={setMinValue} placeholderTextColor='gray' className="py-2 px-4 w-[150] border rounded-lg border-gray-100 font-poppins" />
                                    <Text className="text-lg  font-poppinsSemiBold text-primary-100">-</Text>
                                    <TextInput value={maxValue} placeholder='max' onChangeText={setMaxValue} placeholderTextColor='gray' className="py-2 px-4 w-[150] border rounded-lg border-gray-100 font-poppins" />
                                </View>

                            </View>
                        </View>

                        {/* apply button */}
                        <View className="px-4 mb-4  mt-4">
                            <View className="flex-row ml-auto">
                                <TouchableOpacity onPress={applyFilter} className="bg-primary-100 py-2 px-6 rounded-lg">
                                    <Text className="text-base  font-poppins text-white">Apply</Text>
                                </TouchableOpacity>

                            </View>
                        </View>




                    </View>

                </View>
            </KeyboardAvoidingView>
        </Modal>


    )
}