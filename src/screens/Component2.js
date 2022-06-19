import { Image, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const Component2 = () => {
  const names = [
    {
      index: "1",
      name: "table",
    },
    {
      index: "2",
      name: "chair",
    },
    {
      index: "3",
      name: "pen",
    },
    {
      index: "4",
      name: "paper",
    },
    {
      index: "5",
      name: "laptop",
    },
    {
      index: "6",
      name: "Mobile",
    },
    {
        index: "7",
        name: "TV",
      },
      {
        index: "8",
        name: "Desktop PC",
      },
      {
        index: "9",
        name: "Games",
      },
  ];

  return (
    <FlatList
    style={styles.list}
      keyExtractor={(key) => {
        return key.index;
      }}
    
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={styles.txt}>{item.name}</Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({
  txt: {
    fontWeight: "bold",
    backgroundColor: "green",
    fontSize: 22,
    color: "rgb(255,255,255)",
    width: 370,
    height: 70,
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderWidth: 5,
    borderColor: "rgb(0,0,0)",
    margin: 15,
  },
  list:{
      width:400,
      height:500
  }
});

export default Component2;
