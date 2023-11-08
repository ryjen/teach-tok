import { createListenerMiddleware } from "@reduxjs/toolkit";
import { default as repository } from "@feature/forYou/repository";
import { addQuestion, addAnswers } from "@feature/forYou/state";

const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: addQuestion,
  effect: async (action, { dispatch }) => {
    const response = await dispatch(repository.reveal(action.payload.id.toString()));

    if (
      response.isError == false &&
      response.isLoading == false &&
      response.data != null
    ) {
      dispatch(addAnswers(response.data));
    }
  },
});

export const dataMiddleware = listener;
