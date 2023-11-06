import type { Answer } from "@domain/types";
import React, { View, StyleSheet, Text } from "react-native";

interface Props {
  option: Answer;
}

export const OptionComponent = ({ option }: Props) => (
  <View style={styles.container}>
    <Text style={styles.option}>{option.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  option: {
    color: "white",
    textShadowColor: "black",
  },
});
