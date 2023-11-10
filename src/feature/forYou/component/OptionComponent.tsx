import type { ViewStyle } from "react-native";
import type { Option } from "@domain/types";
import { useState } from "react";
import React, { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { toggleOption as toggle } from "@feature/forYou/state";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { colors } from "@presentation/theme";

interface Props {
  option: Option;
  disabled?: boolean;
  style?: ViewStyle;
}

export const OptionComponent = ({ option, style }: Props) => {
  const dispatch = useDispatch();

  const [isSelected, setSelected] = useState(false);

  const interactionStyle =
    isSelected != true
      ? styles.default
      : option.isCorrect
      ? styles.correct
      : styles.incorrect;

  return (
    <View style={[styles.container, style, interactionStyle]}>
      <TouchableOpacity
        onPress={() => {
          dispatch(toggle(option));
          setSelected(isSelected == true ? false : true);
        }}
      >
        <View style={styles.box}>
          <Text style={styles.option}>{option.value}</Text>
          <View style={isSelected == true ? styles.selected : styles.gone}>
            <Icons
              name={option.isCorrect ? "thumb-up" : "thumb-down"}
              size={32}
              color={colors.foreground}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundInverse,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  option: {
    color: colors.foregroundInverse,
    fontSize: 18,
    flexWrap: "wrap",
    textShadowColor: colors.foreground,
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 6,
  },
  selected: {},
  gone: {
    opacity: 0,
  },

  default: {},
  correct: {
    backgroundColor: colors.success,
  },
  incorrect: {
    backgroundColor: colors.error,
  },
  warning: {
    backgroundColor: colors.warning,
  },
});
