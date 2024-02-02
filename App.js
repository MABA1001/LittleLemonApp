import * as React from 'react';
import { View } from 'react-native';

// Import a local component here
import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#495E57' }}>
      <LittleLemonHeader />
      <LittleLemonFooter />
    </View>
  );
}
