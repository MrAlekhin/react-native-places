import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';


class SideDrawer extends Component{
    render (){
        return (
            <View style={[
                styles.container, 
                {width: Dimensions.get("window").width * 0.8}
                ]}
            >
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="ios-log-out" 
                            size={30} 
                            color="#aaa" 
                            style={styles.drawerItemIcon}
                        />
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", 
        paddingTop: 50
    },
    drawerItem:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#eee"
    },
    drawerItemIcon:{
        marginRight: 10
    }
    
})

export default SideDrawer;