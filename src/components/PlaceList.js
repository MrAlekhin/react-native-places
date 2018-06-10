import React from 'react';
import {View, StyleSheet} from 'react-native';

import ListItem from './ListItem';

const placeList = props =>{
    const placesOutput = props.places.map((place,i)  => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPresed={() => alert('Item pressed - ID: ' + i)}
        />
      ));
    return(
        <View style={styles.listContainer}>{placesOutput}</View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });

export default placeList;
