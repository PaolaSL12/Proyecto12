export const selectOption = (dispatch, opcion, nextQuestion, quiz) => {
    dispatch({ type: "SELECTED_OPTION", payload: opcion });
    const respuesta = quiz[nextQuestion].respuestaCorrecta;
    if (opcion === respuesta) {
      dispatch({ type: "SCORE" });
    }
    setTimeout(() => {
      next(dispatch);
    }, 700);
};

export const next = (dispatch) => {
    dispatch({ type: "NEXT_QUESTION" });
  };

export const handleRestart = (dispatch) => {
    dispatch({ type: "RESTART" });
    dispatch({ type: "NEXT_QUESTION", payload: 0 });
    dispatch({ type: "SELECTED_OPTION", payload: null });
  };
