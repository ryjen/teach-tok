import type { ViewToken } from "react-native";
import { useState } from "react";
import React, { StyleSheet, View, FlatList, Dimensions } from "react-native";
import {
  HeaderComponent,
  TabBarComponent,
  ErrorComponent,
  LoadingComponent,
  EmptyComponent,
} from "@presentation/components";
import {
  QuestionComponent,
  PlaylistComponent,
  QuestionBackgroundComponent,
} from "@feature/forYou/component";
import { QuestionContext } from "@feature/forYou/context";
import { useLoadQuestions } from "@feature/forYou/hook";

export const ForYouScreen = () => {
  const [index, setIndex] = useState(0);

  const { questions, isLoading, isError, refetch } = useLoadQuestions(index);

  const height = () => Dimensions.get("window").height;

  if (isError == true) {
    return <ErrorComponent style={styles.container} />;
  }

  if (isLoading == true) {
    return <LoadingComponent style={styles.container} />;
  }

  if (questions == null || questions.length === 0) {
    return <EmptyComponent style={styles.container} />;
  }

  const onChange = ({
    viewableItems,
    changed,
  }: {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
  }) => {
    //setIndex(questions.indexOf(viewableItems[0].item));
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  };

  const onRefresh = () => {
    refetch();
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />
      <FlatList
        style={[styles.list]}
        data={questions}
        renderItem={({ item }) => (
          <View key={item.id} style={[styles.row, { height: height() }]}>
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
        onViewableItemsChanged={onChange}
        automaticallyAdjustContentInsets={true}
        bounces={false}
        refreshing={isLoading}
        initialNumToRender={1}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
      />
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
