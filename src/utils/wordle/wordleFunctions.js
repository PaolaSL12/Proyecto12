export const handleSubmit = (dispatch, inputValueRef, words, nextWord, attempts) => {
    dispatch({ type: "REMOVE_MESSAGE" });
    const inputValue = inputValueRef.current.value.trim().toLowerCase();
    const correctWord = words[nextWord].word;
    if (inputValue === correctWord.toLowerCase()) {
      dispatch({ type: "SCORE" });
      dispatch({ type: "NEXT_WORD" });
      inputValueRef.current.value = "";
    } else {
      if (attempts === 1) {
        inputValueRef.current.value = "";
        dispatch({ type: "NEXT_WORD" });
        return;
      }
      dispatch({ type: "ATTEMPTS" });
      dispatch({ type: "INCORRECT_MESSAGE" });
      inputValueRef.current.value = "";
    }
  };

export const handleRestart = (dispatch) => {
    dispatch({ type: "RESTART" });
  };