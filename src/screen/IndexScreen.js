import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { BlockContext1 } from "../../context/BlockContext"; // Import BlockContext

const IndexScreen = () => {
  const blogPosts = useContext(BlockContext1); // Use BlockContext here
  return (
    <View>
      <Text> index screen </Text>
      <FlatList
      data={blogPosts}
      keyExtractor={paimann=>paimann.title}
      renderItem={({item})=>{ 
return<Text>{item.title}</Text>
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;