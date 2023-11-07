import React, { View } from "react-native";
import { MaterialIcons as Icons } from "@expo/vector-icons";

interface Props {
  style: React.CSSProperties;
}

export const SearchComponent = ({ style }: Props) => (
  <View style={style}>
    <Icons name={"search"} size={24} color="white" />
  </View>
);
