import { StatusBar } from "expo-status-bar";
import React, { StyleSheet, View } from "react-native";
import { TeachTokView } from "@presentation/views";
import { store } from "@application/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <TeachTokView />
      </Provider>
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
