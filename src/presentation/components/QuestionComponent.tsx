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
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{question?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20,
    justifyContent: "space-between",
  },
  question: {
    flex: 1,
    borderRadius: 6,
  },
  questionText: {
    fontSize: 24,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    color: "white",
    fontWeight: "bold",
  },
  options: { flex: 1 },
  description: { flex: 1 },
  descriptionText: {},
});
