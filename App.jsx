import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AllCategorieRecipe from './screens/AllCategorieRecipe';
import RecipeCategorie from './screens/RecipeCategorie';
import DetailsRecipe from './screens/DetailsRecipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='All Categories' component={AllCategorieRecipe}/>
        <Stack.Screen name='Categorie Recipe' component={RecipeCategorie}/>
        <Stack.Screen name='Detail Recipe' component={DetailsRecipe}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})