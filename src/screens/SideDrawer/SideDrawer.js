import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Text, Dimensions, StyleSheet} from 'react-native';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'


class SideDrawer extends Component{
    render (){
        return (
            <View style={[
                styles.container, 
                {width: Dimensions.get("window").width * 0.8}
                ]}
            >
                <View style={styles.heading}>
                    <HeadingText style={styles.sideHeader}>SideDrawer</HeadingText>
                    <View style={styles.sideHeaderIcon}>
                        <Icon size={30} name="ios-contact" />
                    </View>
                </View>
                <ButtonWithBackground textStyles={styles.buttonText} textColor="white" color="#29aaf4" style={styles.logOutButton}>Logout</ButtonWithBackground>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", 
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 5
    },
    heading: {
        flexDirection: "row",
        alignItems: "center"
    },
    sideHeader: {
        fontSize: 18
    },
    sideHeaderIcon:{
        marginLeft: 5
    },
    buttonText:{
        fontWeight: "bold",
        fontSize: 18
    }
    
})

export default SideDrawer;