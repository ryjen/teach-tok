import React, { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { selectQuestions } from "@feature/forYou/selector";
import {
  HeaderComponent,
  TabBarComponent,
  ErrorComponent,
} from "@presentation/component";
import {
  QuestionComponent,
  PlaylistComponent,
  QuestionBackgroundComponent,
} from "@feature/forYou/component";
import { QuestionContext } from "@feature/forYou/context";
import { useLoadQuestions } from "@feature/forYou/hook";

export const ForYouScreen = () => {
  const { isLoading, isError, reset: onRefresh } = useLoadQuestions();

  const questions = useSelector(selectQuestions);

  const height = Dimensions.get("window").height - 10;

  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />
      <FlatList
        style={styles.list}
        data={questions}
        renderItem={({ item }) => (
          <View key={item.id} style={[styles.row, { height }]}>
            <QuestionContext.Provider value={item}>
              <QuestionBackgroundComponent>
                <QuestionComponent />
                <PlaylistComponent />
              </QuestionBackgroundComponent>
            </QuestionContext.Provider>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        automaticallyAdjustContentInsets={true}
        bounces={false}
        onRefresh={onRefresh}
        refreshing={isLoading}
        initialNumToRender={1}
        showsVerticalScrollIndicator={false}
      />
      {isError == true ? <ErrorComponent style={styles.container} /> : null}
      <TabBarComponent style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {},
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  footer: {},
  list: {},
});
