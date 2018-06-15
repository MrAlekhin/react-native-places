import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const buttonWithBackground = props =>(
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={[styles.textColor, {color: props.textColor}, props.textStyles]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"
    },
    textColor: {
        color: "black"
    }
});

export default buttonWithBackground;