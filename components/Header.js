import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const Header = () => {
    return (
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../assets/flexLogo.png')}
      />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 213, // Adjust the width as needed
      height: 128, // Adjust the height as needed
    },
  });
  
    