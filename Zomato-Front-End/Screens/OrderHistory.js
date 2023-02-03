import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import CartItem from '../Components/CartItem'
import BigText from '../Components/BigText'
import OrderItems from '../Components/OrderItems'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../Redux/OrderSlicer'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
export default function OrderHistory() {
    const { Orders } = useSelector((state) => state.order)
    const { user, token } = useSelector((state) => state.user)



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders(token))


    }, [token])
    const orderPending = "rounded-lg w-32 h-10 bg-orange-600  justify-center items-center"
    const orderDelivered = "rounded-lg w-32 h-10 bg-green-600  justify-center items-center"
    const orderCancelled = "rounded-lg w-32 h-10 bg-red-600  justify-center items-center"

    const orderColor = (order_status) => {
        if (order_status === "Pending") {
            return orderPending
        } else if (order_status === "Delivered") {
            return orderDelivered
        } else if (order_status === "Cancelled") {
            return orderCancelled
        }

    }

    return (
        <View className="mt-8 mb-6">
            {/* header */}
            <View className="flex-row justify-center mt-4 items-center">
                <BigText title={"Your Orders"} />
            </View >

            {/* Cart items */}
            <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
                {Orders && Orders.map((items, i) => (
                    <View key={i} className="mb-10 mx-4 p-4 rounded-xl border-gray-200 border">
                        {/* headers */}

                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className='font-semibold text-base'>Order #{i + 1}</Text>
                                <Text className="text-gray-400">{moment(items?.createdAt).format("DD MMM YYYY hh:mm A")}</Text>
                            </View>

                            <View>
                                <MaterialCommunityIcons name="sticker-remove-outline" size={24} color="red" />
                            </View>
                        </View>

                        {/* order items */}
                        <View className='my-6'>
                            {items.order_items.map((item, index) => (

                                <OrderItems orderItems={item} key={index} />

                            ))}
                        </View>


                        {/* order status */}
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-base text-gray-400">Total</Text>
                                <Text className="font-semibold text-base">${items?.order_total.toFixed(2)}</Text>
                            </View>
                            <View>
                                <View className={orderColor(items?.order_status)}>
                                    <Text className="text-white">{items?.order_status}</Text>
                                </View>
                            </View>
                        </View>
                    </View>))}




            </ScrollView>
        </View>
    )
}
