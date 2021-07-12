import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import GridTile from '../components/GridTile';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <GridTile
                title={itemData.item.title}
                color = {itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals', {
                        categoryId: itemData.item.id,
                    });
                }}
            />
        );
    }
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;
