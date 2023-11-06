import React, { View, Text, StyleSheet } from "react-native";

export const TabComponent = () => (
  <View style={styles.tab}>
    <Text>For You</Text>
  </View>
);

const styles = StyleSheet.create({
  tab: {
    flex: 2,
    borderBottomColor: "white",
    borderBottomWidth: 6,
  },
});
