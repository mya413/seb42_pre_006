import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer() {
  const [answers, setAnswers] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState(null)

  useEffect(() => {
    const handleAnswerData = async() => {
      try {
        const response = await axios.get('/answer');
        const { data } = response;
        setAnswers(data);
      } catch (error) {
        console.error(error);
      }
    }
    handleAnswerData();
  }, []);

  const onChangeSelectedAnswers = (answer) => {
    setSelectedAnswers(answer)
  }

  return (
    <div className="mt-16">
      <AnswersInfo />

      {answers ? (
        <div>
          {answers.map((el) =>
              <MainAnswer key={el.answerId} answerId={el.answerId} answerContent={el.answerContent} onClick={onChangeSelectedAnswers} selectedAnswers={selectedAnswers} />
          )}
        </div>
      ) : null}

      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
