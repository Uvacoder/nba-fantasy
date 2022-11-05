export const evaluateResult = (originalScore: any, comparisonScore: any) => {
  if (originalScore === comparisonScore) {
    return "draw";
  } else {
    return originalScore > comparisonScore ? "win" : "loss";
  }
};
