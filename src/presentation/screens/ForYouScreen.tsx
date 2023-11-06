import type { QuestionView } from "@presentation/types";
import React, { useRef } from "react";
import { StyleSheet, PanResponder, Text, Animated, View } from "react-native";
import {
  QuestionComponent,
  HeaderComponent,
  PlaylistComponent,
  QuestionBackgroundComponent,
} from "@presentation/components";
import { QuestionContext } from "@presentation/context";
import { useNextQuestion, useTimeInApp } from "@domain/hooks";
import { range as rand } from "@domain/Random";

export const ForYouScreen = () => {
  const pan = useRef(new Animated.Value(0)).current;

  const {
    question,
    isError,
    isLoading,
    next: onNext,
    prev: onPrev,
  } = useNextQuestion();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setValue(0);
      },
      //onMoveShouldSetPanResponderCapture: (e, state) => Math.abs(state.dy) > 5,
      onPanResponderMove: (_, state) => {
        pan.setValue(state.dy);
      },
      onPanResponderRelease: (e, state) => {
        if (state.dy < -50) {
          onNext();
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        } else if (state.dy > 50) {
          onPrev();
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const timeInApp = useTimeInApp();

  if (isError == true) {
    return <Text>Unable to load question</Text>;
  }

  if (isLoading == true) {
    return <Text>Loading...</Text>;
  }

  if (question == null) {
    return <Text>No data, please refresh</Text>;
  }

  const view: QuestionView = {
    question,
    tab: "For You",
    time: timeInApp,
    likes: rand(50, 150),
    comments: rand(50, 150),
    bookmarks: rand(50, 150),
    shares: rand(50, 150),
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[{ transform: [{ translateY: pan }] }, styles.box]}
      >
        <QuestionContext.Provider value={view}>
          <QuestionBackgroundComponent>
            <HeaderComponent />
            <QuestionComponent />
            <PlaylistComponent />
          </QuestionBackgroundComponent>
        </QuestionContext.Provider>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
