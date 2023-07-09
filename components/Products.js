import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, FlatList, Image, Text, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import Dropdown from './Dropdown';
import Item from './Item';

const MyComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [itemsData, setItemsData] = useState([]);
  const [isCategoryFiltered, setIsCategoryFiltered] = useState(false);
  const letterPicker = useRef();

  const fetchData = async () => {
    await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setItemsData(data.products))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = [...new Set(itemsData.map((el) => el.category))];
  const filteredItems = itemsData.filter((item) => {
    const matchesSearchText = item.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || item.category === selectedCategory;
    const matchesBrand = selectedBrand === '' || selectedBrand === 'All' || item.brand.toLowerCase() === selectedBrand; // Convert item brand to lowercase for comparison
    return matchesSearchText && matchesCategory && matchesBrand;
  });

  const filteredItemsBrands = [...new Set(filteredItems.map(item => item.brand.toLowerCase()))];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === 'All' ? '' : category);
    setSelectedBrand('All');
    setSearchText('')
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand === 'All' ? '' : brand.toLowerCase()); // Convert selected brand to lowercase
    setSearchText('')

  };


  const renderItem = ({ item }) => <Item title={item.title} image={item.thumbnail} price={item.price} />;

  return (
    <>
      <View style={styles.header}>
        <View style={{position:'relative'}}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Search product"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Image source={require('../assets/search.png')} style={styles.icon} />
        </View>

        {itemsData && itemsData.length > 0 && (
          <Dropdown data={categories} onSelect={handleCategorySelect} selectedItem={selectedCategory} />
        )}
      </View>

      <View style={styles.brandsContainer}>
        {filteredItemsBrands.map((brand, index) => (
          <TouchableOpacity key={index} onPress={() => handleBrandSelect(brand)} style={styles.brandItem}>
            <Text style={styles.brandItemText}>#{brand}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView horizontal={true} style={styles.container}>
        <View>
          <FlatList data={filteredItems} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} numColumns={2} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    padding: 16,
    marginTop: "20px"
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 30,
    marginLeft: 10,
    zIndex:9999
},
  inputContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    width: 152,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#000',
    borderRadius: 5,
    zIndex: 999,
    marginTop: 20
  },
  dropdownButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButtonText: {
    color: '#000',
    fontSize: 14,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 35,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1E3445',
    borderRadius: 5,
    height: 'auto',
    overflow: 'auto',
    color: 'black'
  },
  dropdownMenuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  dropdownMenuItemText: {
    color: '#000',
    fontSize: 14,
  },
  itemContainer: {
    width: 150,
    height: 149,
    flexShrink: 0,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'lightgray',
    marginRight: 15,
    display: 'flex',
    alignContent: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  itemName: {
    color: '#1E3445',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  brandsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  brandItem: {
    display: 'flex',
    width: 84.75,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    color:'#fff',
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  brandItemText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default MyComponent;
