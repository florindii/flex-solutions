import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Dropdown = ({ data, onSelect, selectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemSelect = (item) => {
        setIsOpen(false);
        onSelect(item);
    };

    return (
        <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={handleToggleDropdown} style={styles.dropdownButton}>
                <View style={{ position: 'relative' }}>
                    <Text style={styles.dropdownButtonText}>{selectedItem || 'All'}</Text>
                    <Image source={require('../assets/arrowDown.png')} style={styles.icon} />
                </View>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownMenu}>
                    <TouchableOpacity onPress={() => handleItemSelect('All')} style={styles.dropdownMenuItem}>
                        <Text style={styles.dropdownMenuItemText}>All</Text>
                    </TouchableOpacity>
                    {data.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleItemSelect(item)} style={styles.dropdownMenuItem}>
                            <Text style={styles.dropdownMenuItemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    dropdownContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        width: 192,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        zIndex: 9999,
        marginTop: 20

    },
    icon: {
        position: 'absolute',
        right: -15,
        top: 7,
        marginLeft: 10,
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
    }
});

export default Dropdown;
