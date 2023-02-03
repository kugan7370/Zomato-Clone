import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log("token=====>", token);
    return token;

}

export const removeToken = async () => {
    await AsyncStorage.removeItem('token');
}
