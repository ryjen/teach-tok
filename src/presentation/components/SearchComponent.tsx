import React from "react";
import { MaterialIcons as Icons } from "@expo/vector-icons";

interface Props {
  style: React.CSSProperties;
}

export const SearchComponent = ({ style }: Props) => (
  <Icons name={"search"} size={24} color="white" style={style} />
);
