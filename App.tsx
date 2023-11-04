import { StatusBar } from "expo-status-bar";
import React, { StyleSheet, View } from "react-native";
import { TeachTokView } from '@presentation/views';

export default function App() {
  return (
    <View style={styles.container}>
      <TeachTokView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
