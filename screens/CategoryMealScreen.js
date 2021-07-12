import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = ({ route, navigation }) => {

    const renderMealItem = itemData => {
        return (
            <MealItem title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    navigation.navigate('MealDetails', {
                        mealId: itemData.item.id,
                    })
                }}

            />
        );
    }

    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealScreen;
