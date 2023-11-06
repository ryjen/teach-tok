import { StatusBar } from "expo-status-bar";
import React, { StyleSheet, View } from "react-native";
import { ForYouScreen } from "@presentation/screen";
import { store } from "@application/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ForYouScreen />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
