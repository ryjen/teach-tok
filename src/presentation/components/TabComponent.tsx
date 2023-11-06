import React, { View, Text, StyleSheet } from "react-native";

interface Props {
  style: React.CSSProperties;
}

export const TabComponent = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <View style={styles.content}>
      <Text style={styles.text}>For You</Text>
      <View style={styles.border} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    flex: 0,
  },
  text: {
    color: "white",
    minWidth: 18,
  },
  border: {
    flex: 0,
    marginLeft: 6,
    marginRight: 6,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
});
