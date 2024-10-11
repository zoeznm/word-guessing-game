import React from 'react';
import './introduce.css'; // CSS 파일 추가
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
  const navigate = useNavigate(); 
  const handleHome = () => {
    navigate('/'); // 홈 버튼 클릭 시 메인 페이지로 이동
  };
  return (
    <><div className="introduce-container">
      <h2>Introduce</h2>
      <p>
        이 페이지는 일본어 숫자 단어를 공부할 수 있는 페이지입니다.
        일본어는 1부터 100까지의 숫자를 배우는 것이 중요한 첫걸음입니다. 숫자 단어를 익히면 일본어를 더 잘 이해하고 사용할 수 있게 됩니다.
      </p>
      <p>
        이 프로그램을 통해 간단한 숫자 연습을 할 수 있으며, 반복 학습을 통해 기억을 강화할 수 있습니다.
        학습 과정은 단계적으로 진행되어, 기초부터 시작하여 점차 복잡한 숫자 표현으로 나아갈 수 있습니다.
      </p>
      <p>
        여러분은 이 페이지를 통해 일본어 숫자 단어를 효과적으로 외우고, 언어 능력을 향상시킬 수 있습니다.
        일본어 숫자를 배워서 다양한 상황에서 활용해 보세요!
      </p>
      <p>
        연습을 하면서 재미있는 퀴즈와 게임을 통해 학습의 즐거움을 느끼세요.
        이제 시작해 볼까요? 준비가 되었다면 숫자 범위를 선택하고, 플레이 버튼을 눌러 연습해 보세요!
      </p>
    </div><button
      onClick={handleHome}
      className='home'
    >
        Home
      </button></>
  );
};

export default Introduce;