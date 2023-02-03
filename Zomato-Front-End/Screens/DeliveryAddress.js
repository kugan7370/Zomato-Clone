import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import BigText from '../Components/BigText';
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../Redux/OrderSlicer';
import { useStripe } from "@stripe/stripe-react-native";
import { addPayment } from '../Redux/PaymentSlicer';
import { clearCart } from '../Redux/CartSlicer';

const mapImage = "https://cdn.shopify.com/s/files/1/0436/6306/5238/files/Google_Maps.png?v=1603228034"

const deliveryAddressSchema = Yup.object().shape({
    fullName: Yup.string().required('full name is required'),
    address: Yup.string().required('address is required'),
    state: Yup.string().required('state is required'),
    pincode: Yup.string().required('pincode is required'),
    phone: Yup.number().required('phone is required'),
    city: Yup.string().required('city is required'),
});



export default function DeliveryAddress() {
    const [getLocation, setgetLocation] = useState()
    const { token, user } = useSelector((state) => state.user)
    const navigation = useNavigation()
    const router = useRoute()
    const dispatch = useDispatch()
    const { totalPrice } = router?.params
    const { cartItems } = useSelector((state) => state.cart)

    const { initPaymentSheet, presentPaymentSheet } = useStripe();



    const userAddress = async (values) => {
        if (!getLocation.latitude || !getLocation.longitude) {
            Alert.alert('Please choose your location')
        }

        if (cartItems?.length === 0) {
            Alert.alert('Please add items to cart')
        }
        if (!totalPrice) {
            Alert.alert('Please add items to cart')
        }
        console.log("values", values);
        let addressCollection = []
        addressCollection.push(values)


        const data = {
            order_total: totalPrice,
            order_items: cartItems,
            delivery_address: addressCollection
        }
        // create payments
        const { paymentIntent, ephemeralKey, customer, publishableKey, } = await addPayment({ amount: totalPrice })

        const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            allowsDelayedPaymentMethods: true,
            style: "alwaysDark",
        });
        if (!error) {
            const { error } = await presentPaymentSheet();

            if (error) {
                Alert.alert(`Error code: ${error.code}`, error.message);
            } else {
                const addOrderDetails = await addOrder(data, token)
                if (addOrderDetails?.success) {
                    dispatch(clearCart())
                    Alert.alert('Success', 'Your order is confirmed!');
                    navigation.navigate("orderSuccess")

                }
                else {
                    Alert.alert('Error', 'Something went wrong!');
                }

            }

        }
        else {
            Alert.alert(`Error code: ${error.code}`, error.message);
        }

        //save orders









    }

    const chooseMap = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        let { coords: { latitude, longitude } } = location;
        setgetLocation({
            latitude,
            longitude
        })

    }











    return (
        <View className="mt-8 px-6">
            {/* header */}
            <View className="flex-row  mt-4 items-center">
                {/* <Pressable  className="w-8 h-8 rounded-md justify-center items-center border border-1 border-gray-300">
                    <Ionicons name="arrow-back-sharp" size={20} color="black" />
                </Pressable> */}
                <View className='m-auto'>
                    <BigText title={"Delivery Address"} />
                </View>
            </View >


            {/* address */}

            <View className="mt-4">

                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => userAddress(values)}
                    validationSchema={deliveryAddressSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (

                        <View className='h-[95%]'>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {/* fullname */}
                                <View className="my-2">
                                    <TextInput
                                        placeholder='Full Name'
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                        value={values.fullName}
                                        className="border border-1 p-4 border-gray-300 my-2 rounded-lg"
                                    />
                                    {errors.fullName && <Text className="text-red-500">{errors.fullName}</Text>}
                                </View>

                                {
                                    getLocation &&
                                    <View className="my-2">
                                        <View className='w-full h-52 rounded-xl overflow-hidden'>
                                            <MapView
                                                className='w-full h-full'
                                                initialRegion={{
                                                    latitude: getLocation.latitude,
                                                    longitude: getLocation.longitude,
                                                    latitudeDelta: 0.0922,
                                                    longitudeDelta: 0.0421,
                                                }}
                                            >
                                                <Marker
                                                    coordinate={{ latitude: getLocation.latitude, longitude: getLocation.longitude, }}
                                                    title={user?.name}
                                                    description="online food order"
                                                />
                                            </MapView>


                                        </View>
                                    </View>
                                }


                                {/* choose location */}
                                <TouchableOpacity onPress={chooseMap} className="my-2 border border-[1] p-4 rounded-lg justify-center items-center border-gray-200">
                                    <View className="flex-row items-center">
                                        <View className="w-12 h-12 rounded-full justify-center items-center bg-primary-100">
                                            <Entypo name="location" size={20} color="white" />
                                        </View>
                                        <Text className=" tracking-wide text-gray-400 text-base ml-4">Use my current location</Text>


                                    </View>

                                </TouchableOpacity>


                                {/* Address */}
                                <View className="my-2">
                                    <TextInput
                                        placeholder='Address'
                                        onChangeText={handleChange('address')}
                                        onBlur={handleBlur('address')}
                                        value={values.address}
                                        className="border border-1 p-4  border-gray-300 my-2 rounded-lg"
                                    />
                                    {errors.address && <Text className="text-red-500">{errors.address}</Text>}

                                </View>


                                <View className="my-2">
                                    <TextInput
                                        placeholder='City'
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
                                        value={values.city}
                                        className="border border-1 p-4  border-gray-300 my-2 rounded-lg"
                                    />
                                    {errors.city && <Text className="text-red-500">{errors.city}</Text>}

                                </View>
                                <View className="my-2">
                                    <TextInput
                                        placeholder='State'
                                        onChangeText={handleChange('state')}
                                        onBlur={handleBlur('state')}
                                        value={values.state}
                                        className="border border-1 p-4  border-gray-300 my-2 rounded-lg"
                                    />
                                    {errors.state && <Text className="text-red-500">{errors.state}</Text>}

                                </View>
                                <View className="my-2">
                                    <TextInput
                                        placeholder='Pincode'
                                        onChangeText={handleChange('pincode')}
                                        onBlur={handleBlur('pincode')}
                                        value={values.pincode}
                                        className="border border-1 p-4  border-gray-300 my-2 rounded-lg"
                                    />
                                    {errors.pincode && <Text className="text-red-500">{errors.pincode}</Text>}

                                </View>
                                <View className="my-2">
                                    <TextInput
                                        placeholder='Phone Number'
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        className="border border-1 p-4  border-gray-300 my-2 rounded-lg"
                                    />
                                    {errors.phone && <Text className="text-red-500">{errors.phone}</Text>}

                                </View>





                            </ScrollView>

                            {/* SIGN IN */}

                            <TouchableOpacity onPress={handleSubmit} className="bg-[#e53b3b] p-2 rounded-lg mt-4 ">
                                <Text className="text-white text-center p-1 font-bold text-base">Proceed to pay</Text>
                            </TouchableOpacity>



                        </View>

                    )}
                </Formik>
            </View>


        </View>
    )
}