import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Profile from './Screens/Profile';
import Favorites from './Screens/Favorites';
import BottomTapNavigation from './Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/es/integration/react'
import Signin from './Screens/Signin';

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
        <PersistGate loading={null} persistor={persistor}>
          <Signin />
          {/* <NavigationContainer theme={MyTheme}>
            <BottomTapNavigation />
          </NavigationContainer> */}
        </PersistGate>
      </Provider>

    </View>
  );
}


