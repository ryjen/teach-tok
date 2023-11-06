import React, { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { hms } from "@domain/FormatTime";
import { useQuestionView } from "@presentation/context";

export const TimeSpentComponent = () => {
  const { time } = useQuestionView();
  return (
    <View style={styles.container}>
      <Icons name={"clock"} size={18} color="gray" />
      <Text>{hms(time)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
