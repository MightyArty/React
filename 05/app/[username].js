import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams, Stack } from "expo-router";

const profile = () => {
  const router = useRouter();

  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: username,
          headerStyle: { backgroundColor: "#1E2632" },
          headerTintColor: "#FFE030",
        }}
      />
      <Text style={{ fontSize: 30 }}>
        Hello (@{username})
      </Text>

      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
};

export default profile;
