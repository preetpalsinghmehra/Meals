import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';



const Stack = createStackNavigator();
const FavStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: Colors.accentColor,
                    },
                    headerTintColor: Colors.titleColor,
                }
            }
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={({ navigation }) => {

                    return {
                        title: 'Meal Categories',
                        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                color='tomato'
                                onPress={() => { navigation.toggleDrawer(); }}
                            />

                        </HeaderButtons>)
                    }
                }
                }
            />
            <Stack.Screen
                name='CategoryMeals'
                component={CategoryMealScreen}
                options={({ route }) => {
                    const selectedCategory = CATEGORIES.find((cat) => cat.id === route.params.categoryId);
                    return {
                        title: selectedCategory.title,
                    }
                }}
            />
            <Stack.Screen
                name='MealDetails'
                component={MealDetailScreen}
                options={({ route }) => {
                    const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);
                    return {
                        title: selectedMeal.title,
                        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title='Favorite'
                                iconName='ios-star-outline'
                                color='tomato'
                                onPress={() => { console.log('Pressed') }}
                            />

                        </HeaderButtons>)
                    }
                }
                }
            />
        </Stack.Navigator>
    );
}



const FavoritesNavigator = () => {
    return (
        <FavStack.Navigator
            initialRouteName='Favorites'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: Colors.accentColor,
                    },
                    headerTintColor: Colors.titleColor,
                }
            }
        >
            <FavStack.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={
                    {
                        title: 'Your\'s Favorites'
                    }
                }
            />
            <FavStack.Screen
                name='MealDetails'
                component={MealDetailScreen}
                options={({ route }) => {
                    const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);
                    return {
                        title: selectedMeal.title,
                    }
                }
                }
            />
        </FavStack.Navigator>
    );
}

const MealsTabNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'CategoryMeals') {
                        iconName = 'ios-restaurant'
                            ;
                    } else if (route.name === 'Favorites') {
                        iconName = 'ios-star';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >

            <Tab.Screen
                name="CategoryMeals"
                component={MealsNavigator}
                options={
                    {
                        title: 'Meals '
                    }
                }
            />

            <Tab.Screen
                name="Favorites"
                component={FavoritesNavigator}

            />

        </Tab.Navigator>

    );
}
const FilterStack = createStackNavigator();

const FiltersNavigator = () => {
    return (
        <FilterStack.Navigator initialRouteName='Filter'>
            <FilterStack.Screen name='Filter' component={FiltersScreen}
                options={
                    {
                        title: 'Filters',
                        headerStyle: {
                            backgroundColor: Colors.accentColor
                        },
                        headerTintColor: Colors.titleColor

                    }
                }
            />
        </FilterStack.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="MealsFavs" component={MealsTabNavigator} />
                <Drawer.Screen name="Filters" component={FiltersNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;

