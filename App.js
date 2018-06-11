import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';

import placeImage from './src/assets/sea.jpg';


export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState =>{
      return{
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: placeImage
        })
      };  
    });
  };

  placeDeletedHandler = key =>{
    this.setState(prevState =>{
      return{
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: "100%"
  }
});
