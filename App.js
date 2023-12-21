import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , FlatList} from "react-native";
import DayListItem from './src/component/core/DayListItem' 

 // ending time = 1.09
const days = [...Array(24)].map ((val, index) => index+1);
  
export default function App() {
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
