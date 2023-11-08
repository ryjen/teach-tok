import { StatusBar } from "expo-status-bar";
import React, { StyleSheet, View } from "react-native";
import { ForYouScreen } from "@feature/forYou/screen";
import { store } from "@application/store";
import { Provider } from "react-redux";
import { colors, scheme } from "@presentation/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ForYouScreen />
      </Provider>
      <StatusBar style={scheme.inverse} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: colors.background,
  },
});
