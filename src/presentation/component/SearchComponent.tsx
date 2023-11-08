import type { ViewStyle } from "react-native";
import React, { View } from "react-native";
import { MaterialIcons as Icons } from "@expo/vector-icons";
import { colors } from "@presentation/theme";

interface Props {
  style?: ViewStyle;
}

export const SearchComponent = ({ style }: Props) => (
  <View style={style}>
    <Icons name={"search"} size={24} color={colors.foreground} />
  </View>
);
