import React, { useEffect } from 'react';
import { Button, TextInput, View, Text, Touchable, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../Redux/UserSlicer';
import { useNavigation } from '@react-navigation/native';

const loginImage = 'https://fullofplants.com/wp-content/uploads/2020/05/sweet-and-sour-spicy-thai-fried-rice-easy-vegan-meal-with-vegetables-thumb-500x500.jpg'

export default function Signin() {


    const { token } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigation = useNavigation();


    useEffect(() => {
        if (token) {
            navigation.navigate('home')
        }

    }, [token])

    const SigninScheme = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Password is required'),
    });


    const userSignin = (values) => {
        dispatch(userAuth(values))
    }
    return (

        <View>
            <View className="w-full h-80">
                <Image className="h-full w-full" source={{ uri: loginImage }} />
            </View>

            <View className="mt-8 mx-6">

                <View className="my-8">
                    <Text className="text-2xl font-bold">Login</Text>
                </View>

                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => userSignin(values)}
                    validationSchema={SigninScheme}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (

                        <View>
                            {/* EMAIL */}
                            <View className="my-2">
                                <Text className="text-sm font-bold text-gray-500 tracking-wide">EMAIL ADDRESS</Text>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    className="border border-1 p-2 border-gray-300 my-2 rounded-lg"
                                />
                                {errors.email && <Text className="text-red-500">{errors.email}</Text>}


                            </View>

                            {/* PASSWORD */}
                            <View className="my-2">
                                <Text className="text-sm text-gray-500 font-bold tracking-wide">PASSWORD</Text>
                                <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    className="border border-1 p-2 border-gray-300 my-2 rounded-lg"
                                />
                                {errors.password && <Text className="text-red-500">{errors.password}</Text>}


                            </View>

                            {/* forgot password */}
                            <View className="my-2">
                                <TouchableOpacity>
                                    <Text className="text-sm text-center text-gray-600 font-bold tracking-wide">Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>

                            {/* SIGN IN */}

                            <TouchableOpacity onPress={handleSubmit} className="bg-[#e53b3b] p-2 rounded-lg mt-4">
                                <Text className="text-white text-center p-1 font-bold text-base">Sign In</Text>
                            </TouchableOpacity>

                            {/* SIGN UP */}
                            <View className="my-2">
                                <TouchableOpacity>
                                    <Text className="text-sm text-center text-gray-600 font-bold tracking-wide">Don't have an account? Sign Up</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    )}
                </Formik>
            </View>
        </View>
    )
}