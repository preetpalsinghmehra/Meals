import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';


const GridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback >
        </View>
    );
}

const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    title: {
        fontSize: 19,
        textAlign: 'right',

    }

});

export default GridTile;
