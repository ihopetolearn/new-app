import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BlockContext1 } from "../../context/BlockContext"; // Import BlockContext

const IndexScreen = () => {
  const value = useContext(BlockContext1); // Use BlockContext here
  return (
    <View>
      <Text> this is the </Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;