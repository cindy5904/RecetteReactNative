import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable, 
} from 'react-native';
import React, { useState } from 'react';
import {MEALS} from '../recettes/data/data.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RecipeCategorie({navigation, route}) {
  const category = route.params.category;
  const categoryMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(category.id),
  );
  const [favoris, setFavoris] = useState([]);

  const addToFavoris = (meal) => {
    setFavoris([...favoris, meal]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Recettes de la catégorie{' '}
          <Text style={styles.categori}>{category.title}</Text>
        </Text>
        <View style={styles.mealsContainer}>
          {categoryMeals.map(meal => (
            <TouchableOpacity
              key={meal.id}
              style={styles.card}
              onPress={() => {
                navigation.navigate('Detail Recipe', {meal: meal});
              }}
              activeOpacity={0.7}>
              <Image style={styles.img} source={{uri: meal.imageUrl}} />
              <TouchableOpacity onPress={() => {addToFavoris(meal)}}>
              <Icon style={styles.heart} name="heart" size={28} color='white' />
              </TouchableOpacity>
              <View style={styles.cardContent}>
                <Text style={styles.mealTitle}>{meal.title}</Text>
                <View style={styles.textContent}>
                  <Text style={styles.text}>{meal.duration} mn</Text>
                  <Text style={styles.text}>
                    {meal.complexity.toUpperCase()}
                  </Text>
                  <Text style={styles.text}>
                    {meal.affordability.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  {meal.isVegan && (
                  <Image style={styles.imgIcone} source={require('../asset/vegan.png')} />)}
                  {meal.isGlutenFree && (
                    <Image style={styles.imgIconeGluten} source={require('../asset/gluten.png')} />)}
                  {meal.isVegetarian && (
                    <Image style={styles.imgIcone} source={require('../asset/vegan.png')} />)}
                  {meal.isLactoseFree && (
                    <Image style={styles.imgIcone} source={require('../asset/lactose.jpg')} />)}
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
    color: '#004d51',
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
    height: 400,
    marginBottom: 38,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    gap : 10,
    
  },
  imgIcone: {
    width: 40,
    height: 40,
    borderRadius: 50,
  }, 
  imgIconeGluten: {
    width: 25,
    height: 25,
    marginTop: 8
  },
  heart: {
    top: -220,
    left: 320,
  }
});
