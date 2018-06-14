import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefautInput from '../../components/UI/DefaultInput/DefaultInput';

class AuthScreen extends Component{
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to login" />
                <View style={styles.inputContainer}>
                    <DefautInput placeholder="Your E-Mail Address"  />
                    <DefautInput placeholder="Password" />
                    <DefautInput placeholder="Confirm Password" />
                </View>
                <Button title="Signup" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8
    }
})

export default AuthScreen;