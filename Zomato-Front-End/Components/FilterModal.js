import Modal from "react-native-modal";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Switch, } from 'react-native'
import React, { useState } from 'react'
import { PrimaryColor } from '../constants/Colors';


export default function FilterModal({ isModalVisibleStatus, toggleModalStatus }) {
    //models
    const [isModalVisible, setModalVisible] = useState(isModalVisibleStatus);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        toggleModalStatus(!isModalVisible)

    };


    // ratings
    const [isRatingEnabled, setIsRatingEnabled] = useState(false);
    const toggleRatingSwitch = () => setIsRatingEnabled(previousState => !previousState);

    // delivery time
    const [isDeliveryTimeEnabled, setIsDeliveryTimeEnabled] = useState(false);
    const toggleDeliveryTimeSwitch = () => setIsDeliveryTimeEnabled(previousState => !previousState);



    const deviceWidth = Dimensions.get("window").width;

    return (
        <Modal isVisible={isModalVisible} style={{ margin: 0, justifyContent: "flex-end" }}>
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

                                <TextInput placeholder='min' placeholderTextColor='gray' className="py-2 px-4 w-[150] border rounded-lg border-gray-100 font-poppins" />
                                <Text className="text-lg  font-poppinsSemiBold text-primary-100">-</Text>
                                <TextInput placeholder='max' placeholderTextColor='gray' className="py-2 px-4 w-[150] border rounded-lg border-gray-100 font-poppins" />
                            </View>

                        </View>
                    </View>

                    {/* apply button */}
                    <View className="px-4 mb-4  mt-4">
                        <View className="flex-row ml-auto">
                            <TouchableOpacity onPress={toggleModal} className="bg-primary-100 py-2 px-6 rounded-lg">
                                <Text className="text-base  font-poppins text-white">Apply</Text>
                            </TouchableOpacity>

                        </View>
                    </View>




                </View>

            </View>
        </Modal>

    )
}