import { useState } from "react";
import React, { StyleSheet, View, FlatList, Dimensions } from "react-native";
import {
  QuestionComponent,
  HeaderComponent,
  PlaylistComponent,
  QuestionBackgroundComponent,
  TabBarComponent,
  ErrorComponent,
  LoadingComponent,
  EmptyComponent,
} from "@presentation/components";
import { QuestionContext } from "@presentation/context";
import { useNextQuestion } from "@domain/hooks";

export const ForYouScreen = () => {
  const data = useNextQuestion();

  const { questions, isLoading, isError, refetch: onRefresh } = data;

  const [heights, setHeights] = useState({
    window: Dimensions.get("window").height,
    tabs: 0,
  });

  if (isError == true) {
    return <ErrorComponent style={styles.container} />;
  }

  if (isLoading == true) {
    return <LoadingComponent style={styles.container} />;
  }

  if (questions == null) {
    return <EmptyComponent style={styles.container} />;
  }

  const height = () => heights.window - heights.tabs - 10;

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) => {
        //setHeights({ window: nativeEvent.layout.height });
      }}
    >
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
        automaticallyAdjustContentInsets={true}
        bounces={false}
        refreshing={isLoading}
        initialNumToRender={1}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
      />
      <TabBarComponent
        style={styles.footer}
        onLayout={({ nativeEvent }) => {
          setHeights({ tabs: nativeEvent.layout.height });
        }}
      />
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
