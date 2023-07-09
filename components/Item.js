import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


const Item = ({ title, image, price }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <View style={styles.itemOverlay}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{title}</Text>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemPrice}>{price}$</Text>
        </View>
      </View>
    </View>
  );
  
  const styles = StyleSheet.create({
    itemContainer: {
      width: 150,
      height: 149,
      borderRadius: 5,
      marginBottom: 10,
      position: 'relative',
      marginRight:20
    },
    itemImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderRadius: 5,
    },
    itemOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    itemTextContainer: {
      flex: 1,
    },
    itemName: {
      color: '#fff',
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontWeight: '400',
    },
    itemPrice: {
      color: '#fff',
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontWeight: '400',
      textAlign: 'right',
    },
  });
  
  export default Item;
  