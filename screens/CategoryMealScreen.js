import React from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = ({ route, navigation }) => {



    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return (
        <MealList
            listData={displayedMeals}
            navigation={navigation}
        />
    );
}


export default CategoryMealScreen;
