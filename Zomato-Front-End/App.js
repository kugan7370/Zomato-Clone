import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Details from './Screens/Details';
import Home from './Screens/Home';

export default function App() {
  return (
    <View className="flex-1 mt-8">
      <StatusBar style="auto" />
      <Details />
    </View>
  );
}


