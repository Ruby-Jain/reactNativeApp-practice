import { StyleSheet, Text, View } from "react-native";
import Component from "./src/screens/Component";
import Component2 from "./src/screens/Component2";

export default function App() {
    const name = "Ruby"
    return (
        <View style={styles.container}>
            <Text style={txtstyle.text}> App component </Text>
            <Text style={txtstyle.nm}>Hi {name} !</Text>
            <Component/>
            <Component2/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255,255,0)",
        alignItems: "center",
        fontWeight:'bold',
        textAlign:'center',
        justifyContent: "center",
    },
});
const txtstyle = StyleSheet.create({
    text: {
        marginTop:30,
        marginBottom: 10,
        fontSize: 40,
        fontWeight:'bold'
    },
    nm: {
        marginBottom: 20,
        fontSize: 40,
        fontWeight:'bold',
    },
    
});