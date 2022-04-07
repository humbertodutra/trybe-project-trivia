const shuffleAnswers = (answers) => {
  const sortNumber = 0.5;
  const answersObj = [
    { text: answers.correct_answer, correct: true },
    ...answers.incorrect_answers.map(
      (answer) => ({ text: answer, correct: false }),
    ),
  ];
  return answersObj.sort(() => Math.random() - sortNumber);
};

export default shuffleAnswers;
