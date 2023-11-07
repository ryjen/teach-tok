import type { ViewStyle } from "react-native";
import React, { Text, View, StyleSheet } from "react-native";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
}

export const EmptyComponent = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>No data, are you connected?</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    padding: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.warning,
    color: colors.foreground,
  },
});
