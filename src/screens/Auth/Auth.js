import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, ImageBackground} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefautInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component{
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return(
            
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <View style={styles.container}>
                    <MainText>
                        <HeadingText style={styles.textHeading}>Signup</HeadingText>
                    </MainText>
                    <Button title="Switch to login" />
                    <View style={styles.inputContainer}>
                        <DefautInput placeholder="Your E-Mail Address" style={styles.input} />
                        <DefautInput placeholder="Password" style={styles.input}/>
                        <DefautInput placeholder="Confirm Password" style={styles.input}/>
                    </View>
                    <Button title="Register" onPress={this.loginHandler} />
                    </View>
                </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }
})

export default AuthScreen;