import type { ViewStyle } from "react-native";
import type { Option } from "@domain/types";
import React, { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleOption as toggle } from "@feature/forYou/state";
import { selectOptionStatus } from "@feature/forYou/selector";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { colors } from "@presentation/theme";

interface Props {
  option: Option;
  style?: ViewStyle;
}

export const OptionComponent = ({ option, style }: Props) => {
  const dispatch = useDispatch();
  const status = useSelector(selectOptionStatus(option));

  const interactionStyle =
    status == null
      ? styles.default
      : status == true
      ? styles.correct
      : styles.incorrect;

  return (
    <TouchableOpacity
      style={[styles.container, style, interactionStyle]}
      onPress={() => dispatch(toggle(option))}
    >
      <Text style={styles.option}>{option.value}</Text>
      {status != null ? (
        <Icons
          name={status == true ? "thumb-up" : "thumb-down"}
          size={32}
          color={colors.foreground}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.backgroundInverse,
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
});
