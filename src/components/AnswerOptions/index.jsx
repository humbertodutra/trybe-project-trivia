import PropTypes from 'prop-types';
import React from 'react';

export default function AnswerOptions({ shuffled, handleClick, answered }) {
  return (
    <div data-testid="answer-options">
      {shuffled.map(({ text, correct, id }, i) => (
        <button
          onClick={ () => handleClick(correct) }
          className={ `question ${answered && correct && 'correct'}
              ${answered && !correct && 'incorrect'}` }
          data-testid={ correct ? 'correct-answer' : `wrong-answer-${id}` }
          key={ `${text}:${i}` }
          type="button"
          disabled={ answered }
        >
          {text}
        </button>
      ))}
    </div>
  );
}

AnswerOptions.propTypes = {
  answered: PropTypes.bool,
  handleClick: PropTypes.func,
  shuffled: PropTypes.arrayOf({}),
}.isRequired;
