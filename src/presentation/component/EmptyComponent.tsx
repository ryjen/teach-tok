import type { ViewStyle } from "react-native";
import React, { Text, View, StyleSheet } from "react-native";
import { colors } from "@presentation/theme";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";

interface Props {
  style?: ViewStyle;
}

export const EmptyComponent = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <View style={styles.box}>
      <Icons name="database-alert" size={32} color={colors.warning} />
      <Text style={styles.text}>No data, are you connected?</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  text: {
    color: colors.foreground,
    fontSize: 20,
    flexWrap: "wrap",
    marginLeft: 5,
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: colors.warning,
    borderWidth: 2,
  },
});
