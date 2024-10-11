// src/GamePage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from './numbers.json'; // JSON 파일 경로
import './gamepage.css'; // CSS 파일 경로

const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 추가
  const { range } = location.state || {}; // 메인페이지에서 선택한 범위 가져오기
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([]); // 필터링된 질문 저장

  // 범위에 따른 질문 필터링
  useEffect(() => {
    const questionsInRange = questions.filter((q) =>
      q.number >= range[0] && q.number <= range[1]
    );
    setFilteredQuestions(questionsInRange);
  }, [range]); // 범위가 변경될 때마다 필터링

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      // 랜덤 질문을 설정
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      setCurrentQuestion(filteredQuestions[randomIndex]);
    }
  }, [filteredQuestions, questionIndex]); // 필터링된 질문이 변경될 때마다 랜덤 질문 설정

  const handleAnswer = (answer) => {
    setUserAnswer(answer); // 사용자 답변 저장
    // 정답 체크
    if (answer === currentQuestion.number) {
      setScore(score + 1);
    }
    
    // 다음 질문으로 넘어갑니다.
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      setUserAnswer(null); // 사용자 답변 초기화
    }, 1000); // 1초 후에 다음 질문으로 넘어갑니다.
  };

  const handleRestart = () => {
    setScore(0);
    setQuestionIndex(0);
    setUserAnswer(null);
    setCurrentQuestion(null); // 초기화
  };

  const handleHome = () => {
    navigate('/'); // 홈 버튼 클릭 시 메인 페이지로 이동
  };

  if (questionIndex >= filteredQuestions.length) {
    return (
      <div className="game-container">
        <h1>게임 끝!</h1>
        <p>점수: {score}</p>
        <button onClick={handleRestart} className="retry-button">다시 시작하기</button>
        <button onClick={handleHome} className="next-button">홈으로 가기</button>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>로딩 중...</div>; // 질문이 로드되지 않았을 때 표시할 내용
  }

  return (
    <>
      <div className="game-container">
        <h2 className="question">{currentQuestion.japanese}</h2>
        {userAnswer !== null && (
          <div className="result-message">
            <p>
              {userAnswer === currentQuestion.number ? '정답입니다!' : '틀렸습니다.'}
            </p>
          </div>
        )}
      </div>
      <div className='answer_wrap'>
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            className="answer-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button 
        onClick={handleHome}
        className='home'
      >
        홈으로 가기
      </button>
    </>
  );
};

export default GamePage;