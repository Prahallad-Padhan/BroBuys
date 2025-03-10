import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BroBuys</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/map")}
      >
        <Text style={styles.buttonText}>Open Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#007bff", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 18 },
});

export default HomeScreen;
