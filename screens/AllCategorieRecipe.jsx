import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../recettes/data/data.js'


export default function AllCategorieRecipe({navigation}) {
    
  return (
    <View style= {styles.container}>
      <FlatList contentContainerStyle={styles.liste}
        data={CATEGORIES}
        renderItem={({item}) => (
            <Pressable
            onPress={() =>
              navigation.navigate('Categorie Recipe', { category: item })
            }>
            <View style={[styles.item, { backgroundColor: item.color }]}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      liste: {
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingHorizontal: 10, 
      },
      item: {
        margin: 20, 
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 10,
      },
      title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
      },
})