import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View, ImageBackground, FlatList,StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Theme from '../components/Theme'
import Header from '../components/Header'

import { Context as CategoriesContext } from '../context/CategoriesContext'

const TrendingCard = ({ category }) => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground style={styles.image} source={{ uri: category.strCategoryThumb }}>
        <Text h5 style={styles.text}>{category.strCategory}</Text>
      </ImageBackground>
    </View>
  )
}

const HomeScreen = ({ navigation }) => {
  const { state, fetchCategories } = useContext(CategoriesContext)

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchCategories())
    return unsub
  }, [navigation])

  console.log(state);

  return (
    <SafeAreaView>
      <Theme>
        <Header title="Home"/>
        <Text h5>Trending</Text>
        <FlatList
          style={styles.listContainer}
          data={state}
          renderItem={({ item }) => <TrendingCard category={item}/>}
          keyExtractor={item => item.idCategory}
          horizontal
        />
      </Theme>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    height: 200
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 100,
    height: 100
  },
  text: {
    color: 'white'
  }
})

export default HomeScreen