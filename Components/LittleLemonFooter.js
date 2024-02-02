import React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#F4CE14'
      }}
    >
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 16,
          color: 'black',
          textAlign: 'center'
        }}
      >
        All rights reserved by Little Lemon, 2024
      </Text>
    </View>
  );
}
