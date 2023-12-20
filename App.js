import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , FlatList} from "react-native";

 // ending time = 1.09
const days = [1,2,3,4,5,6,7,8,9];

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
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

  content:{
    gap:10,
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
