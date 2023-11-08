import type { ViewStyle } from "react-native";
import React, { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
}

export const LoadingComponent = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <ActivityIndicator
      style={styles.activity}
      size="large"
      color={colors.foreground}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  activity: {},
});
