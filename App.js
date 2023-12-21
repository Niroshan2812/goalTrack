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
        renderItem={({item})=>  (
          <View style={styles.box}>
          <Text style={styles.text}>{item}</Text>
        </View>
        )}
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

  box: {
    backgroundColor: "#f9EDE3",
   
    flex :1,
    aspectRatio:1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9B4521",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9B4521",
    fontSize: 70,
  },
});
