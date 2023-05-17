import { StyleSheet, Text, View } from "react-native";
import { Link, Stack, Redirect } from "expo-router"; // for navigation

const users = [
  {
    username: "gabi",
    name: "Gabi Gavrieli",
  },
  {
    username: "Shani",
    name: "Shani Fox",
  },
  {
    username: "yosi",
    name: "Yosi Cohen",
  },
];

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello</Text>
        {/* Just for the navigation */}
        {/* First way to pass the params in a string */}
        {/* <Link href="/Gabi?name=Gabi" style={styles.link}>
          Open Gabi profile
        </Link> */}

        {users.map((user) => (
          <Link
            key={user.username}
            href={`/${user.username}`}
            style={styles.link}
          >
            Open {user.name}'s profile
          </Link>
        ))}

        {/* Second way to pass the params as an objects */}
        {/* <Link
          href={{
            pathname: "/Tom",
            params: { name: "Tom" },
          }}
          style={styles.link}
        >
          Open Tom's profile
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  link: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
