import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements'

import { screenHeight } from "../../utils/contants.js"
import Gap from "../Gap"
import Button from "../Button"

const Article = ({ data }) => {
  const Item = ({ url, title, content }) => (
    <View style={styles.container}>
      <Image
        style={styles.imageBrand}
        source={{
          uri: url,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subContent}>
          <View>
            <Icon
              name='rowing' />
          </View>
          <Gap width={5} />
          <View style={styles.description}>
            <Text>{content}</Text>
          </View>
        </View>
        <Button
          title="Join the discussion"
          type="primary"
        />
        <View style={styles.share}>
          <Text>98</Text>
          <Text>12 Comment</Text>
        </View>
        <Gap height={10}/>
        <View style={styles.share}>
          <Text>Like</Text>
          <Text>Comment</Text>
          <Text>Share</Text>
        </View>
      </View>

    </View>

  );

  const renderItem = ({ item }) => (
    <Item url={item.image_url} title={item.title} content={item.content} />
  );

  return (

    <View >
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

export default Article;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 20,
    marginVertical: 20
  },
  imageBrand: {
    height: 120,
  },
  content: {
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingTop: 8
  },
  title: {
    fontSize: 17,
    fontWeight: "bold"
  },
  subContent: { display: "flex", flexDirection: "row" },
  description: {
    backgroundColor: "#E7F2F8",
    overflow:"hidden",
    marginRight:5,
  },
  share : {
    display : "flex",
    flexDirection:"row",
    justifyContent : "space-between",
  },
})