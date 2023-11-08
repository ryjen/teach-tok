import React, { View, Text, StyleSheet } from "react-native";
import { OptionComponent } from "./OptionComponent";
import { useQuestionContext } from "@feature/forYou/context";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { BadgeIcon } from "@presentation/component";
import { colors } from "@presentation/theme";

export const QuestionComponent = () => {
  const question = useQuestionContext();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question?.question}</Text>
        </View>
        <View style={styles.options}>
          {question?.options.map((option) => {
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
      <View style={styles.right}>
        <BadgeIcon
          name="book-open-blank-variant"
          color={colors.foreground}
          badge={<Icons name="plus-circle" color="green" size={24} />}
          badgeStyle={{
            position: "relative",
            marginTop: -15,
            backgroundColor: "white",
            borderRadius: 24,
          }}
          style={styles.icon}
        />
        <BadgeIcon
          name="cards-heart"
          color={colors.foreground}
          badge={question?.likes}
          style={styles.icon}
        />
        <BadgeIcon
          name="chat-processing"
          color={colors.foreground}
          badge={question?.comments}
          style={styles.icon}
        />
        <BadgeIcon
          name="bookmark"
          color={colors.foreground}
          badge={question?.bookmarks}
          style={styles.icon}
        />
        <BadgeIcon
          name="share"
          color={colors.foreground}
          badge={question?.shares}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    justifyContent: "space-evenly",
    marginRight: 10,
  },
  right: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  icon: {
    marginVertical: 8,
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
    backgroundColor: colors.backgroundAlternate,
    color: colors.foreground,
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
  descriptionText: { color: colors.foreground },
  user: { color: colors.foreground, fontWeight: "bold", fontSize: 16 },
});
