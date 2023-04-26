import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import BigText from "../Components/BigText";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { PrimaryColor } from "../constants/Colors";
import SmallText from "../Components/SmallText";
import MediumText from "../Components/MediumText";
import Status from "../Components/Status";
import Popular from "../Components/Popular";
import Categories from "../Components/Categories";
import FoodList from "../Components/FoodList";
import { getFoods } from "../Redux/FoodSlicer";
import { useDispatch, useSelector } from "react-redux";
import { getPopularProducts } from "../Redux/PopularFoodSlicer";
import { getLikeFoods } from "../Redux/FavoriteSlicer";
import { getCardItemsFromDb } from "../Redux/CartSlicer";
import { getCategories } from "../Redux/CategorySlicer";
import { useNavigation } from "@react-navigation/native";
import FilterModal from "../Components/FilterModal";
import { slideImages } from "../assets/data/data";

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //data from state
  const { isLoading, popularFoods } = useSelector(
    (state) => state?.popularFoods
  );
  const { isCategoryLoading, categories } = useSelector(
    (state) => state?.categories
  );
  const { Foods } = useSelector((state) => state?.foods);
  const { user, token } = useSelector((state) => state.user);

  //models
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //check if user is logged in
  useEffect(() => {
    if (!token) {
      navigation.navigate("signin");
    }
  }, []);

  //get foods
  useEffect(() => {
    dispatch(getFoods());
  }, []);

  // get popular foods
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  //get liked foods
  useEffect(() => {
    dispatch(getLikeFoods());
  }, []);

  //get cart from Db
  useEffect(() => {
    dispatch(getCardItemsFromDb());
  }, []);

  //get categories
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const deviceWidth = Dimensions.get("window").width;

  return (
    <View className="mt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <View className="flex-row justify-between items-center px-4 ">
          <View className="h-16 w-16 bg-primary-100 rounded-2xl justify-center items-center">
            <Text className="font-poppinsSemiBold text-center text-white p-2">
              Zomo
            </Text>
          </View>
          <View className="flex-1 ml-5">
            <BigText title={"Deliciour asian food"} />
            <SmallText title={"Sumo is watching hunger has no chance"} />
          </View>
        </View>

        {/* categories */}
        <View className="mt-6">
          <View className="px-4">
            <BigText title={"Categories"} />
          </View>

          <ScrollView
            className="mt-6 px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories?.length > 0 && isCategoryLoading ? (
              <ActivityIndicator size="large" color={PrimaryColor} />
            ) : (
              categories?.map((item) => (
                <Categories categories={item} key={item._id} />
              ))
            )}
          </ScrollView>
        </View>

        {/* search and filter  */}
        {/* <View className="flex-row justify-between items-center mx-2 p-4 mt-8 ">
                    <TouchableOpacity onPress={() => navigation.navigate("search")} className="flex-row flex-1 items-center py-3 px-2 border border-1 border-gray-100 rounded-lg">
                        <View className="h-10 w-10  rounded-full justify-center items-center">
                            <Ionicons name="ios-search" size={36} color={PrimaryColor} />
                        </View>
                        <View className="ml-6">
                            <MediumText title={"Search"} />
                            <SmallText title={"Find your food"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleModal} className="h-16 bg-primary-100 w-16 p-2 ml-4  justify-center items-center border border-1 border-gray-100 rounded-lg">
                        <MaterialCommunityIcons name="filter-variant-plus" size={24} color="white" />
                    </TouchableOpacity>
                </View> */}

        {/* Special offers */}
        <View className="mt-6 ">
          <View className="px-4">
            <BigText title={"Special offers"} />
          </View>
          <ScrollView
            className="mt-6"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {slideImages.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="relative px-2 mr-2 h-48 w-screen overflow-hidden justify-center items-center "
              >
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  source={item.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* popular */}
        <View className="mt-6 ">
          <View className="px-4">
            <BigText title={"Popular"} />
          </View>

          <ScrollView
            className="mt-6 px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {popularFoods?.length > 0 && isLoading ? (
              <ActivityIndicator size="large" color={PrimaryColor} />
            ) : (
              popularFoods?.map((item) => (
                <Popular popularFood={item} key={item._id} />
              ))
            )}
          </ScrollView>
        </View>

        {/* food for you */}
        <View className="mt-6">
          <View className="px-4">
            <BigText title={"Food for you"} />
          </View>

          {/* food details */}
          <View className="mt-8 px-4">
            {Foods?.length > 0 && isLoading ? (
              <ActivityIndicator size="large" color={PrimaryColor} />
            ) : (
              Foods?.map((item) => <FoodList FoodList={item} key={item._id} />)
            )}
          </View>
        </View>

        {/* open model for filter */}
        {isModalVisible && (
          <FilterModal
            isModalVisibleStatus={isModalVisible}
            toggleModalStatus={toggleModal}
          />
        )}
      </ScrollView>
    </View>
  );
}
