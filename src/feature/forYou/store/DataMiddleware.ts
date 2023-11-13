import type {
  ThunkDispatch as RootDispatch,
  RootState,
} from "@application/types";
import type { TypedStartListening } from "@reduxjs/toolkit";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { repository } from "@feature/forYou/repository";
import { addQuestion, addAnswers } from "@feature/forYou/state";

type AppStartListening = TypedStartListening<RootState, RootDispatch>;

const listener = createListenerMiddleware();

const startAppListening = listener.startListening as AppStartListening;

startAppListening({
  actionCreator: addQuestion,
  effect: async (action, { dispatch }) => {
    const result = await dispatch(
      repository.reveal(action.payload.id.toString()),
    );

    const { data, isLoading, isError, isUninitialized } = result;

    if (
      isError == false &&
      isLoading == false &&
      isUninitialized == false &&
      data != null
    ) {
      dispatch(addAnswers(data));
    }

    // TODO: log error or refetch
  },
});

export const dataMiddleware = listener;
