import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefautInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class AuthScreen extends Component{
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return(
            <View style={styles.container}>
                <HeadingText style={styles.textHeading}>Signup</HeadingText>
                <Button title="Switch to login" />
                <View style={styles.inputContainer}>
                    <DefautInput placeholder="Your E-Mail Address" style={styles.input} />
                    <DefautInput placeholder="Password" style={styles.input}/>
                    <DefautInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                <Button title="Register" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

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