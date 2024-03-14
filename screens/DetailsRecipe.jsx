import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function DetailsRecipe({route}) {
  const {meal} = route.params;
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image
        style={styles.img}
        source={{uri: meal.imageUrl}}
        resizeMode="cover"
      />
      <Text style={styles.mealTitle}>{meal.title}</Text>
      <View style={styles.textContent}>
        <Text style={styles.text}>{meal.duration} mn</Text>
        <Text style={styles.text}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{meal.affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.mealDetail}>
            <Text style={styles.title}>Ingredient</Text>
            {meal.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.textMealDetail}>{ingredient}</Text>
    ))}
    </View >
    <View style={styles.mealDetail}>
            <Text style={styles.title}>Steps</Text>
            {meal.steps.map((step, index) => (
        <Text key={index} style={styles.textMealDetail}>{step}</Text>
    ))}
    </View >
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 400,
  },
  mealTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black'
    
  },
  textContent: {
    flexDirection: 'row',
    gap: 15,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    color: 'black',
    marginBottom:30,
 
  },
  text: {
      color: 'black',
      fontSize: 13,
  }, 
  mealDetail: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dbb095',
    width: 350,
    marginBottom: 5,
    paddingBottom: 10,
    textAlign : 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#dbb095',
  },
  textMealDetail: {
    backgroundColor: '#dbb095',
    width: 350,
    textAlign: 'center',
    padding: 8,
    margin: 8,
    borderRadius: 10,
    color: 'black',
    fontSize: 18,
  },
});
