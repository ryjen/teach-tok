import React, { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { hms } from "@domain/FormatTime";
import { useQuestionView } from "@presentation/context";

interface Props {
  style: React.CSSProperties;
}

export const TimeSpentComponent = ({ style }: Props) => {
  const { time } = useQuestionView();
  return (
    <View style={[styles.container, style]}>
      <Icons name={"clock"} size={24} color={styles.text.color} />
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
    color: "white",
  },
});
