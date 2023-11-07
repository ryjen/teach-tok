import type { ViewStyle } from "react-native";
import React, { View, Text, StyleSheet } from "react-native";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
}

export const TitleComponent = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <View style={styles.content}>
      <Text style={styles.text}>For You</Text>
      <View style={styles.border} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  content: {
    flex: 0,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.foreground,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  border: {
    flex: 0,
    marginLeft: 6,
    marginRight: 6,
    borderBottomColor: colors.foreground,
    borderBottomWidth: 4,
  },
});
