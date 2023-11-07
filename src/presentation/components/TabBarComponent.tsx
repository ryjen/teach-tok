import type { CSSProperties } from "react-native";
import React, { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";

interface Props {
  style: CSSProperties;
}

export const TabBarComponent = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <Icons name="home" size={32} color="white" />
    <Icons name="compass" size={32} color="white" />
    <Icons name="timer" size={32} color="white" />
    <Icons name="bookmark" size={32} color="white" />
    <Icons name="account-circle" size={32} color="white" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
