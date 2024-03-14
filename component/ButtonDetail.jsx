import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { MEALS } from '../recettes/data/data.js'


export default function ButtonDetail() {
  return (
    <View>
      <FlatList style={styles.liste}
        data={MEALS}
        renderItem={({item}) => (
            <View style={styles.ingredient}>
            <Text style={styles.title}>Ingredient</Text>
            <Text>{item.ingredients}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        

      />
    </View>
  )
}

const styles = StyleSheet.create({})