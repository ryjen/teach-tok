import type { ViewStyle } from "react-native";
import type { Answer } from "@domain/types";
import React, { View, StyleSheet, Text } from "react-native";
import { colors } from "@presentation/theme";

interface Props {
  option: Answer;
  style?: ViewStyle;
}

export const OptionComponent = ({ option, style }: Props) => (
  <View style={[styles.container, style]}>
    <Text style={styles.option}>{option.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.backgroundInverse,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  option: {
    color: colors.foregroundInverse,
    fontSize: 18,
    textShadowColor: colors.foreground,
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 6,
  },
});
