import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, Dimensions, } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FoodList from '../Components/FoodList';
import { useSelector } from 'react-redux';

import FilterModal from '../Components/FilterModal';

export default function Search() {
    const [searchResults, setSearchResults] = useState()
    const [searchText, setSearchText] = useState('')
    const [filterItems, setFilterItems] = useState()

    const { Foods } = useSelector((state) => state?.foods)
    const { isRating, isDelivery, isMaxPrice, isMinPrice } = useSelector((state) => state.switches)

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

    //search results
    const searchResultsData = () => {
        let searchData = Foods?.filter((item) => {
            return item?.name?.toLowerCase().includes(searchText?.toLowerCase())
        })

        //sort by rating
        if (isRating) {

            searchData = searchData?.sort((a, b) => b?.rating - a?.rating)

        }

        //sort by delivery time
        if (isDelivery) {
            searchData = searchData?.sort((a, b) => a?.deliveryTime - b?.deliveryTime)
        }

        //sort by max price
        if (isMaxPrice && !isMinPrice) {
            searchData = searchData?.filter((item) => item?.price <= isMaxPrice)
        }

        //sort by min price
        if (isMinPrice && !isMaxPrice) {
            searchData = searchData?.filter((item) => item?.price >= isMinPrice)
        }

        //sort by min and max price
        if (isMinPrice && isMaxPrice) {
            searchData = searchData?.filter((item) => item?.price >= isMinPrice && item?.price <= isMaxPrice)
        }



        setSearchResults(searchData)
    }







    //get autocomplete results
    useEffect(() => {
        searchResultsData()

    }, [searchText, isRating, isDelivery, isMaxPrice, isMinPrice])


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