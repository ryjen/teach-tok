import type { ViewStyle } from "react-native";
import React, { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { hms } from "@domain/FormatTime";
import { useTimeInApp } from "@domain/hooks";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
}

export const TimeSpentComponent = ({ style }: Props) => {
  const time = useTimeInApp();

  return (
    <View style={[styles.container, style]}>
      <Icons name={"clock"} size={24} color={colors.foreground} />
      <Text style={styles.text}>{hms(time)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    color: colors.foreground,
  },
});
