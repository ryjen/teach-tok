import type { ReactNode } from "react";
import type { ViewStyle } from "react-native";
import { isValidElement } from "react";
import React, { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
  name: keyof typeof Icons.glyphMap;
  badge: string | number | ReactNode;
  size?: number;
  color?: string;
  badgeStyle?: ViewStyle;
}

export const BadgeIcon = ({
  style,
  name,
  badge,
  size,
  color,
  badgeStyle,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Icons
        name={name}
        size={size == null ? 36 : size}
        color={color == null ? "white" : color}
      />
      {isValidElement(badge) == true ? (
        <View style={[styles.badge, badgeStyle]}>{badge}</View>
      ) : (
        <Text style={[styles.badgeText, badgeStyle]}>{badge}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "column", alignItems: "center" },
  badge: {},
  badgeText: {
    color: colors.foreground,
    fontSize: 12,
  },
});
