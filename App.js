import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import HomeDetailScreen from './src/Screens/HomeDetailScreen.js';
import HomeScreen from './src/Screens/HomeScreen.js';
import ProfileDetailScreen from './src/Screens/ProfileDetailScreen.js';
import SwapLineIcon from './src/icons/swap-line.svg';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Simple ProfileScreen component
function ProfileScreen({ navigation, route }) {
  console.log('ProfileScreen route:', route);
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Profile Details"
        onPress={() => navigation.navigate('ProfileDetail')}
      />
    </View>
  );
}

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: 'Back',
        headerTintColor: 'white'
      }}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="HomeDetailScreen" 
        component={HomeDetailScreen} 
        options={{ title: 'Home Details' }}
      />
    </Stack.Navigator>
  );
}

function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: 'Back',
        headerTintColor: 'white'
      }}>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen 
        name="ProfileDetail" 
        component={ProfileDetailScreen} 
        options={{ title: 'Profile Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="HomeTab" 
          component={MyHomeStack}
          options={{ title: 'Home', headerShown: false }}
        />
        <Tab.Screen 
          name="ProfileTab" 
          component={MyProfileStack}
          options={{ title: 'Profile', headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});