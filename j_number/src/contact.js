import React from 'react';
import './contact.css'; // CSS 파일 추가
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const navigate = useNavigate(); 
  const handleHome = () => {
    navigate('/'); // 홈 버튼 클릭 시 메인 페이지로 이동
  };
  return (
    <><div className="contact-container">
      <h2>Contact</h2>
      <p>
        여러분의 의견이나 질문이 있으신가요? 언제든지 저에게 연락해 주세요!
      </p>
      <p>
        이메일: <a href="mailto:example@example.com">example@example.com</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
      </p>
      <p>
        인스타그램: <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a>
      </p>
      <p>
        여러분의 피드백은 제가 더 나은 콘텐츠를 만드는 데 큰 도움이 됩니다.
        언제든지 소중한 의견을 기다리고 있습니다. 감사합니다!
      </p>
    </div><button
      onClick={handleHome}
      className='home'
    >
        홈으로 가기
      </button></>
  );
};

export default Contact;