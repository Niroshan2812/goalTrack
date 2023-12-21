import{Text, View, StyleSheet} from 'react-native';

export default function DayListItem () {
    return (
    <View style={styles.box}>
          <Text style={styles.text}>1</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    
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
  
