import type { Answer } from "@domain/types";
import React, { View, StyleSheet, Text, CSSProperties } from "react-native";

interface Props {
  option: Answer;
  style: CSSProperties;
}

export const OptionComponent = ({ option, style }: Props) => (
  <View style={[styles.container, style]}>
    <Text style={styles.option}>{option.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "rgba(200,200,200, 0.75)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  option: {
    color: "white",
    fontSize: 18,
    textShadowColor: "black",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 6,
  },
});
