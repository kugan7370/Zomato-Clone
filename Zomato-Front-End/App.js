import { StatusBar } from 'expo-status-bar';
import { View, Linking } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/es/integration/react'
import { RootNavigation } from './Navigation/RootNavigation';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLIC_KEY } from "@env"
import OrderSuccess from './Screens/OrderSuccess';
import { useEffect } from 'react';

import {
  useFonts,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,

  });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StripeProvider
            publishableKey={STRIPE_PUBLIC_KEY}
          >
            <RootNavigation />
          </StripeProvider>
        </PersistGate>
      </Provider>

    </View>
  );
}


