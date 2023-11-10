import type { ViewStyle, LayoutChangeEvent } from "react-native";
import React, { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
}

type Glyph = keyof typeof Icons.glyphMap;

export const TabBarComponent = ({ style, onLayout }: Props) => {
  const icons = Object.entries({
    home: "Home",
    compass: "Discover",
    timer: "Activity",
    bookmark: "Bookmarks",
    "account-circle": "Profile",
  });

  return (
    <View style={[styles.container, style]} onLayout={onLayout}>
      {icons.map(([icon, title]) => (
        <View key={icon} style={styles.icon}>
          <Icons name={icon as Glyph} size={36} color={colors.foreground} />
          <Text style={styles.title}>{title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: colors.foreground,
    fontSize: 12,
  },
  icon: {
    flexDirection: "column",
    alignItems: "center",
  },
});
