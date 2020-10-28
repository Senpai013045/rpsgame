const didUserWin = (uoption, hoption) => {
  let result = "";
  const allOptions = [
    { option: "rock", defeats: "scissors" },
    { option: "scissors", defeats: "paper" },
    { option: "paper", defeats: "rock" },
  ];
  if (uoption === hoption) {
    result = "draw";
  } else {
    let condition1 = allOptions.find((item) => item.option === uoption);
    let condition2 = allOptions.find((item) => item.option === hoption);

    if (condition1.defeats === hoption) {
      result = "you win";
    } else if (condition2.defeats === uoption) {
      result = "you lose";
    } else {
      result = "";
    }
  }

  return result;
};

export default didUserWin;
