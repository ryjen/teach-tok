import React, { View, StyleSheet } from "react-native";
import { TabComponent } from "./TabComponent";
import { SearchComponent } from "./SearchComponent";
import { TimeSpentComponent } from "./TimeSpentComponent";

export const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <TimeSpentComponent />
      <TabComponent />
      <SearchComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    //justifyContent: "space-evenly",
    marginTop: 30,
    padding: 20,
    //alignItems: "center",
    flexDirection: "row",
  },
});
