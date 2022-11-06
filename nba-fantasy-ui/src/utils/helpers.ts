export const evaluateResult = (
  originalScore: any,
  comparisonScore: any,
  reverse?: boolean
) => {
  if (originalScore === comparisonScore) {
    return "draw";
  } else if (reverse) {
    return originalScore < comparisonScore ? "win" : "loss";
  } else {
    return originalScore > comparisonScore ? "win" : "loss";
  }
};
