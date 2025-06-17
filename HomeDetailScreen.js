import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeDetailScreen({ navigation, route }) {
  // DEBUG: Add this to see what route contains
  console.log('HomeDetailScreen route:', route);
  console.log('HomeDetailScreen route.params:', route?.params);
  
  const [food, setFood] = useState('default food');
  
  // SAFE parameter access with detailed logging
  const name = route?.params?.name;
  const functionA = route?.params?.functionA;
  
  console.log('HomeDetailScreen name:', name);
  console.log('HomeDetailScreen functionA:', functionA);
  
  const changeFood = (foodGet) => { 
    setFood(foodGet); 
  };

  return (
    <View style={styles.container}>
      <Text>Home Detail Screen</Text>
      <Text>Food: {food}</Text>
      <Button
        title="go back"
        onPress={() => navigation.goBack()}
      />
      {/* SAFE rendering - this is crucial */}
      <Text>Name: {name || 'No name provided'}</Text>
      <Button
        title='change first page food'
        onPress={() => {
          console.log('Attempting to call functionA with Apple');
          if (functionA && typeof functionA === 'function') {
            functionA('Apple');
          } else {
            console.log('functionA is not available or not a function');
          }
        }}
      />
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

// ADD THIS - Make sure styles are defined
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});