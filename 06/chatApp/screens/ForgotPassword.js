import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { useRoute } from "@react-navigation/native";

export default function ForgotPassword() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <Text>Params: {route.params.userEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
