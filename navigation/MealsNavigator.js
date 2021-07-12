import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';



const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categories'
                screenOptions={
                    {
                        headerStyle: {
                            backgroundColor: Colors.primaryColor,
                        },
                        headerTintColor: Colors.titleColor,
                    }
                }
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={
                        {
                            title: 'Meal Categories',
                        }
                    }
                />
                <Stack.Screen
                    name='CategoryMeals'
                    component={CategoryMealScreen}
                    options={({ route }) => {
                        const selectedCategory = CATEGORIES.find((id) => id === route.params.categoryId);
                        console.log(route.params);
                        return {
                            title: selectedCategory.title
                        }
                    }}
                />
                <Stack.Screen
                    name='MealDetails'
                    component={MealDetailScreen}
                    options={
                        {
                            title: 'Meal Details',
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default MealsNavigator;

