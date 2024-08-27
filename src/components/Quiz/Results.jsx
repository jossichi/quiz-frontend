import React from 'react';
import '../CSS/Results.css';

function Results({ score, correctCount, totalQuestions }) {
  return (
    <div className="results-container">
      <h2>KẾT QUẢ</h2>
      <p className="score-text">{score}</p>
      <p className="correct-answers">Số câu đúng: {correctCount} / {totalQuestions} câu</p>
    </div>
  );
}

export default Results;
