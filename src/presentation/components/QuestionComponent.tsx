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
          return (
            <OptionComponent
              style={styles.option}
              key={option.id}
              option={option}
            />
          );
        })}
      </View>
      <View style={styles.description}>
        <Text style={styles.user}>{question?.user?.name}</Text>
        <Text style={styles.descriptionText}>{question?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20,
    justifyContent: "space-evenly",
  },
  question: {
    flex: 1,
    borderRadius: 6,
    marginTop: 20,
  },
  questionText: {
    fontSize: 24,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    color: "white",
    fontWeight: "bold",
  },
  options: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    marginVertical: 5,
  },
  option: { marginVertical: 5 },
  description: { flex: 0, marginTop: 5 },
  descriptionText: { color: "white" },
  user: { color: "white", fontWeight: "bold", fontSize: 16 },
});
