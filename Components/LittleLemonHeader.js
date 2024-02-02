import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center' // Horizontally center the content
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center' // Center the text within the container
  }
});

export default LittleLemonHeader;
