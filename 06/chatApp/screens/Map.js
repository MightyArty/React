import React, { useLayoutEffect, useState } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import { auth, database } from "../config/firebase";
import { signOut } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Map() {
  const [pin, setPin] = useState({
    latitude: 32.103376857642246,
    longitude: 35.20905301042528,
  });
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back",
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerBackTitleVisible: false, // if want to not show
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSignOut}>
          <AntDesign
            name="logout"
            size={24}
            color={colors.white}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <MapView
        style={styles.map}
        // 32.103376857642246, 35.20905301042528
        initialRegion={{
          latitude: 32.103376857642246,
          longitude: 35.20905301042528,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google" // for google maps insted of default map of the phone
      >
        <Marker
          coordinate={pin}
          pinColor="red"
          draggable={true}
          onDragStart={(event) => {
            console.log("Drag start", event.nativeEvent.coordinate);
          }}
          onDragEnd={(event) => {
            setPin({
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm Here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={500}></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
