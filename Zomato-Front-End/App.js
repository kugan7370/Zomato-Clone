import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };



  return (
    <View className="flex-1 mt-8 ">
      <StatusBar style="auto" />
      <NavigationContainer theme={MyTheme}>
        <RootNavigation />
      </NavigationContainer>

    </View>
  );
}


