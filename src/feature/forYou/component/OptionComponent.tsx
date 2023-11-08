import type { ViewStyle } from "react-native";
import type { Option } from "@domain/types";
import { useState } from "react";
import React, { Pressable, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { toggleOption as toggle } from "@feature/forYou/state";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { colors } from "@presentation/theme";

interface Props {
  option: Option;
  disabled: boolean;
  style?: ViewStyle;
}

export const OptionComponent = ({ option, disabled, style }: Props) => {
  const dispatch = useDispatch();

  const [isSelected, setSelected] = useState(false);

  const interactionStyle =
    isSelected != true
      ? styles.default
      : option.isCorrect
      ? styles.correct
      : styles.incorrect;

  return (
    <Pressable
      disabled={disabled}
      style={[styles.container, style, interactionStyle]}
      onPress={() => {
        dispatch(toggle(option));
        setSelected(isSelected == true ? false : true);
      }}
    >
      <Text style={styles.option}>{option.value}</Text>
      {isSelected == true ? (
        <Icons
          name={option.isCorrect ? "thumb-up" : "thumb-down"}
          size={32}
          color={colors.foreground}
        />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.backgroundInverse,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  option: {
    color: colors.foregroundInverse,
    fontSize: 18,
    textShadowColor: colors.foreground,
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 6,
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
