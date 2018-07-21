import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/index";
import MapView, { Marker } from "react-native-maps";

class PlaceDetail extends Component {
  state = {
    viewMode: "portrait",
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122
    }
  };

  constructor(props) {
    super(props);

    Dimensions.addEventListener("change", this.updateStyles);
  }
  componentDidMount() {
    if (this.props.selectedPlace.location) {
      this.setState(prevState => {
        return {
          focusedLocation: {
            ...prevState.focusedLocation,
            latitude: this.props.selectedPlace.location.latitude,
            longitude: this.props.selectedPlace.location.longitude
          }
        };
      });
    }
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          this.state.viewMode === "portrait"
            ? styles.portraitContainer
            : styles.landscapeContainer
        ]}
      >
        <View style={styles.subContainer}>
          <Image
            source={this.props.selectedPlace.image}
            style={styles.placeImage}
          />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.placeName}>
              {this.props.selectedPlace.name}
            </Text>
            <MapView
              initialRegion={{
                ...this.props.selectedPlace.location,
                latitudeDelta: 0.0122,
                longitudeDelta:
                  (Dimensions.get("window").width /
                    Dimensions.get("window").height) *
                  0.0122
              }}
              style={styles.map}
            >
              <MapView.Marker coordinate={this.props.selectedPlace.location} />
            </MapView>
          </View>

          <View style={styles.deleteButton}>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
              <View>
                <Icon
                  size={30}
                  name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                  color="red"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  },
  map: {
    width: "100%",
    height: 210
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
