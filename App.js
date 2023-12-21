import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , FlatList, ActivityIndicator} from "react-native";
import DayListItem from './src/component/core/DayListItem';
import { useEffect } from "react";


import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from 'expo-splash-screen';

 // ending time = 1.09

 SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map ((val, index) => index+1);

  
export default function App() {

 const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(()=>{
    if (fontsLoaded || fontError){
      SplashScreen.hideAsync();
    }
  },[fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError){
return null;
  }

  return (
    <View style={styles.container}>

      <DayListItem/>

      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle = {styles.coloum}
        numColumns={2}
        renderItem={({item})=> <DayListItem day={item}/>}
      />

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",  
  },
  coloum:{
    gap:10,
  },

  content:{
    gap:10,
    padding:10
  },

  
});
