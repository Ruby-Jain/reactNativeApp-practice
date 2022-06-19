import {
    Button,
    TouchableOpacity,
    Alert,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";


export default function Component() {
    return (
        <View>
            <Image style={cstyle.img} source={require("../../assets/pic1.jpg")} />
            <Button
                title="CLICK ME"
                fontSize="20"
                fontWeight="bold"
                color="rgb(10,150,10)"
                onPress={() => {
                    Alert.alert("Hi there!!");
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Good Evening Everyone !!");
                }}
            > 
                <Image style={cstyle.img2} source={require("../../assets/pic2.jpg")} />
                <Text style={cstyle.text}>Greeting Button</Text>
            </TouchableOpacity>
             {/* <Text style={cstyle.text}> I'm Child component </Text> */}
        </View>
    );
}
const cstyle = StyleSheet.create({
    text: {
        margin:5,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }, 
    img: {
        width: 390,
        height: 170,
        borderWidth:5,
        borderColor:'rgb(0,0,0)'
    },
    img2: {
        justifyContent:'center',
        left:50,
        top:5,
        borderWidth:5,
        borderColor:'rgb(0,255,0)',
        position:'relative',
        width: 300,
        bottom:10,
        height: 120
    }
});
