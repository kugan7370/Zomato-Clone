import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Profile from './Screens/Profile';
import Favorites from './Screens/Favorites';
import BottomTapNavigation from './Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';


export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };



  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <BottomTapNavigation />
        </NavigationContainer>
      </Provider>

    </View>
  );
}


