import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { BlockContext1 } from "../../context/BlockContext"; // Import BlockContext

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlockContext1); // Use BlockContext here
  return (
    <View>
      <Text> IndexScreen </Text>
      <Button title="add post" onPress={addBlogPost}/>
      <FlatList
      data={data}
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