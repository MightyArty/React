/**
 * @abstract Used to navigate through the app by the arrows at the top
 */

import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#FFE030" },
        headerTintColor: "#1E2632",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <AntDesign
              onPress={() => router.push("/modal")}
              name="infocirlceo"
              size={22}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "#1E2632",
        }}
      />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};
