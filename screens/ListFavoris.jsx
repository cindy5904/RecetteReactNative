import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import React from 'react'

export default function ListFavoris({navigation, favoris}) {
  return (
    <View>
      <Text>La liste de favoris</Text>
      <FlatList style={styles.favoris}
      data={favoris}
      renderItem={({item}) => (
        <Pressable
            onPress={() => 
            navigation.navigate('Detail Recipe', {meal: item})}>
        </Pressable>
      )} 
      keyExtractor={item => item.id}
      />
       <View style={styles.cardContent}>
                <Text style={styles.mealTitle}>{item.title}</Text>
                <View style={styles.textContent}>
                  <Text style={styles.text}>{item.duration} mn</Text>
                  <Text style={styles.text}>
                    {item.complexity.toUpperCase()}
                  </Text>
                  <Text style={styles.text}>
                    {item.affordability.toUpperCase()}
                  </Text>
                </View>
                {/* <View style={styles.iconContainer}>
                  {meal.isVegan && (
                  <Image style={styles.imgIcone} source={require('../asset/vegan.png')} />)}
                  {meal.isGlutenFree && (
                    <Image style={styles.imgIconeGluten} source={require('../asset/gluten.png')} />)}
                  {meal.isVegetarian && (
                    <Image style={styles.imgIcone} source={require('../asset/vegan.png')} />)}
                  {meal.isLactoseFree && (
                    <Image style={styles.imgIcone} source={require('../asset/lactose.jpg')} />)}
                </View> */}
              </View>
    </View>
  )
}

const styles = StyleSheet.create({})