import type { ViewToken, LayoutChangeEvent } from "react-native";
import { useState, useRef } from "react";
import React, { StyleSheet, View, FlatList, Dimensions } from "react-native";
import {
  HeaderComponent,
  TabBarComponent,
  ErrorComponent,
  LoadingComponent,
  EmptyComponent,
} from "@presentation/component";
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

  const onChange = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: Array<ViewToken>;
      changed: Array<ViewToken>;
    }) => {
      if (
        viewableItems.length < 2 ||
        viewableItems[0].index < viewableItems[1].index
      ) {
        setIndex(index + 1);
      } else if (
        index > 0 &&
        viewableItems.length > 2 &&
        viewableItems[0].index > viewableItems[1].index
      ) {
        setIndex(index - 1);
      }
    },
  );

  const onRefresh = () => {
    setIndex(0);
    refetch();
  };

  const height = Dimensions.get("window").height - 10;

  if (isError == true) {
    return <ErrorComponent style={styles.container} />;
  }

  if (isLoading == true) {
    return <LoadingComponent style={styles.container} />;
  }

  if (questions == null || questions.length === 0) {
    return <EmptyComponent style={styles.container} />;
  }
  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />
      <FlatList
        style={[styles.list]}
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
        onViewableItemsChanged={onChange.current}
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
