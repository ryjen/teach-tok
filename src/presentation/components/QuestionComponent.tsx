import type { Answer } from "@domain/types";
import React, { View, Text, StyleSheet } from "react-native";
import { OptionComponent } from "./OptionComponent";
import { useQuestionView } from "@presentation/context";

export const QuestionComponent = () => {
  const { question } = useQuestionView();

  console.log(`rendering ${question?.image}`);

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{question?.question}</Text>
      </View>
      <View style={styles.options}>
        {question?.options.map((option: Answer) => {
          return <OptionComponent key={option.id} option={option} />;
        })}
      </View>
      <Text style={styles.description}>{question?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  question: {
    flex: 1,
    backgroundColor: "gray",
    borderRadius: 6,
  },
  questionText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  options: {},
  description: {},
});
