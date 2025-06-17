import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileDetailScreen({ navigation, route }) {
  // DEBUG: Add this to see what route contains
  console.log('ProfileDetailScreen route:', route);
  console.log('ProfileDetailScreen route.params:', route?.params);
  
  return (
    <View style={styles.container}>
      <Text>Profile Detail Screen</Text>
      <Button
        title="go to profile detail screen"
        onPress={() => {
          console.log('Navigating to ProfileDetailScreen again');
          navigation.push('ProfileDetail');
        }}
      />
      <Button
        title="go to Home"
        onPress={() => {
          console.log('Navigating to Home');
          navigation.navigate('Home');
        }}
      />
      {/* Safe rendering */}
      <Text>Route Name: {route?.params?.name || 'No name provided'}</Text>
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