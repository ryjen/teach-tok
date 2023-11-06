import React, { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { useQuestionView } from "@presentation/context";

export const PlaylistComponent = () => {
  const { question } = useQuestionView();
  return (
    <View style={styles.container}>
      <Icons name="play-box-multiple" color="white" size={18} />
      <Text style={styles.playlist}>{question?.playlist}</Text>
      <Icons name="chevron-right" color="white" size={18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    backgroundColor: "dimgray",
  },
  playlist: {
    flex: 2,
    color: "white",
  },
});
