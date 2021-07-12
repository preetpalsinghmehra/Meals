import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {


    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
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

export default MealDetailScreen;
