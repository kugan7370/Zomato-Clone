import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, Dimensions, } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { PrimaryColor } from '../constants/Colors';

import FoodList from '../Components/FoodList';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";
import FilterModal from '../Components/FilterModal';

export default function Search() {
    const [searchResults, setSearchResults] = useState()
    const [searchText, setSearchText] = useState('')

    const { Foods } = useSelector((state) => state?.foods)

    //models
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    //use ref to focus on input
    const inputRef = useRef()


    //use effect to focus on input
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    //filter search results

    const filterResults = () => {
        const filteredData = Foods?.filter((item) => {
            return item?.name?.toLowerCase().includes(searchText?.toLowerCase())
        })
        setSearchResults(filteredData)
    }


    //get autocomplete results
    useEffect(() => {
        filterResults()

    }, [searchText])


    const deviceWidth = Dimensions.get("window").width;

    return (

        <View className="flex-1">
            {/* search header */}
            <View className="flex-row items-center justify-between  mx-4 mt-16 bg-gray-100 rounded-xl overflow-hidden ">
                <View className="flex-row flex-1  py-1  items-center px-4 ">
                    <TextInput ref={inputRef} onChangeText={setSearchText} value={searchText} className="py-4 flex-1 text-base" placeholder="Search for food" placeholderTextColor='gray' />
                </View>

                <TouchableOpacity onPress={toggleModal} className="h-16 bg-primary-100 w-16 p-2 ml-4  justify-center items-center rounded-lg">
                    <MaterialCommunityIcons name="filter-variant-plus" size={24} color="white" />
                </TouchableOpacity>
            </View>


            {/* search results */}

            <ScrollView showsVerticalScrollIndicator={false} className="mt-8 px-4">
                {searchResults?.length > 0 &&
                    searchResults?.map((item) => <FoodList FoodList={item} key={item._id} />)
                }
            </ScrollView>


            {/* open model for filter */}
            {isModalVisible && <FilterModal isModalVisibleStatus={isModalVisible} toggleModalStatus={toggleModal} />}



        </View>

    )
}