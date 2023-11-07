import React, { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { useQuestionView } from "@presentation/context";

export const PlaylistComponent = () => {
  const { question } = useQuestionView();
  return (
    <View style={styles.container}>
      <Icons name="play-box-multiple" color="white" size={22} />
      <Text style={styles.playlist}>{question?.playlist}</Text>
      <Icons name="chevron-right" color="white" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgb(52, 52, 52)",
  },
  playlist: {
    flex: 2,
    marginLeft: 10,
    color: "white",
  },
});
