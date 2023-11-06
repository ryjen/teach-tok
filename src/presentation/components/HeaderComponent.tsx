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
    flex: 1,
    flexDirection: "row",
  },
  tab: {
    flex: 2,
    borderBottomColor: "white",
    borderBottomWidth: 6,
  },
});
