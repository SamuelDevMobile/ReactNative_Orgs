import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';
import { 
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold
   } from '@expo-google-fonts/montserrat';
   
   import mock from './src/mocks/cesta'

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
