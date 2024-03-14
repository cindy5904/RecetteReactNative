import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { MEALS } from '../recettes/data/data.js'

export default function RecipeCategorie({navigation, route}) {
  const category  = route.params.category;
  const categoryMeals = MEALS.filter((meal) => meal.categoryIds.includes(category.id));
  
  return (
    <View style={styles.container}>
    <ScrollView>   
    <Text style={styles.title}>Recettes de la catégorie <Text style={styles.categori}>{category.title}</Text></Text>
    <View style={styles.mealsContainer}>
      {categoryMeals.map((meal) => (
        <TouchableOpacity key={meal.id} style={styles.card} onPress={() => { navigation.navigate('Detail Recipe', { meal: meal })}} activeOpacity={0.7}>
          <Image style={styles.img} source={{ uri: meal.imageUrl }} />
          <View style={styles.cardContent}>
            <Text style={styles.mealTitle}>{meal.title}</Text>
            <View style={styles.textContent}>
              <Text style={styles.text}>{meal.duration} mn</Text>
              <Text style={styles.text}>{meal.complexity.toUpperCase()}</Text>
              <Text style={styles.text}>{meal.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView> 
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
},
title: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  marginTop: 15,
  textAlign: 'center',
},
categori: {
    color:'#004d51',
},
mealsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 'auto',
  
},
card: {
  backgroundColor: '#fff',
  width: 370,
  height: 320,
  marginBottom: 38,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
img: {
  width: '100%',
  height: 230,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
},
cardContent: {
  padding: 5,
},
mealTitle: {
  textAlign: 'center',
  fontSize: 22,
  fontWeight: 'bold',
  
},
textContent: {
  flexDirection: 'row',
  gap: 15,
  fontSize: 18,
  textAlign: 'center',
  justifyContent: 'center',
  marginTop: 10,
  color: 'black',
  
},
text: {
    color: 'black',
    fontSize: 15,
}
})