import React, { useState } from "react";
import { View, PanResponder, Text } from "react-native";
import { QuestionView } from "@presentation/components";
import { useNextQuestion } from "@domain/hooks";

export const TeachTokView = () => {
  const { data, isError, isLoading, next, prev } = useNextQuestion();
  const [gestureY, setGestureY] = useState(0);

  const onPan = () => {
    if (gestureY > 0) {
      next();
    } else {
      prev();
    }
    setGestureY(0);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (e, state) => Math.abs(state.dy) > 5,
    onPanResponderMove: (e, state) => setGestureY(state.dy),
    onPanResponderRelease: onPan,
  });

  if (isError == true || data == null) {
    return <Text>Unable to load question</Text>;
  }

  if (isLoading == true) {
    return <Text>Loading...</Text>;
  }

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <QuestionView question={data} />
    </View>
  );
};
