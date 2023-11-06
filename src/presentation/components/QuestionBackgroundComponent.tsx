import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { useQuestionView } from "@presentation/context";

interface Props {
  children: ReactNode;
}

export const QuestionBackgroundComponent = ({ children }: Props) => {
  const { question } = useQuestionView();

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{ uri: question?.image, priority: FastImage.priority.normal }}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
});
