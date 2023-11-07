import React, { View, StyleSheet } from "react-native";
import { TitleComponent } from "./TitleComponent";
import { SearchComponent } from "./SearchComponent";
import { TimeSpentComponent } from "./TimeSpentComponent";

export const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <TimeSpentComponent style={styles.timer} />
      <TitleComponent />
      <SearchComponent style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "space-evenly",
    marginTop: 50,
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  timer: {
    flex: 1,
  },
  search: {
    flex: 1,
    alignItems: "flex-end",
  },
});
