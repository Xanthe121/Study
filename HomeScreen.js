import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  // DEBUG: Add this to see what route contains
  console.log('HomeScreen route:', route);
  console.log('HomeScreen route.params:', route?.params);
  
  const [food, setFood] = useState('candy');
  const changeFood = (foodget) => { setFood(foodget); };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Food: {food}</Text>
      <Button
        title="go to Home Detail"
        onPress={() => {
          console.log('Navigating to HomeDetailScreen with params:', { name: 'avon', functionA: changeFood });
          navigation.navigate('HomeDetailScreen', { 
            name: 'avon', 
            functionA: (arg) => changeFood(arg) 
          });
        }}
      />
      {/* Safe rendering of route params */}
      <Text>Route Name: {route?.params?.name || 'No name provided'}</Text>
    </View>
  );
}

// ADD THIS - This was missing and causing the error
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});