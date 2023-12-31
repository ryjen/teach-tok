import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { useQuestionContext } from "@feature/forYou/context";

interface Props {
  children: ReactNode;
}

export const QuestionBackgroundComponent = ({ children }: Props) => {
  const question = useQuestionContext();

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
    paddingTop: 70,
  },
  content: {
    flex: 3,
    justifyContent: "flex-start",
  },
  image: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
});
