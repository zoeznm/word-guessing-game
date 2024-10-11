import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainpage.css'; // CSS 파일 추가

const ranges = [
  { label: '1~10', value: [1, 10] },
  { label: '11~20', value: [11, 20] },
  { label: '21~30', value: [21, 30] },
  { label: '31~40', value: [31, 40] },
  { label: '41~50', value: [41, 50] },
  { label: '51~60', value: [51, 60] },
  { label: '61~70', value: [61, 70] },
  { label: '71~80', value: [71, 80] },
  { label: '81~90', value: [81, 90] },
  { label: '91~100', value: [91, 100] },
];

const MainPage = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/game', { state: { range: selectedRange } });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <><div className="navbar">
      <button onClick={() => handleNavigate('/introduce')}>pre-practice</button>
      <button onClick={() => handleNavigate('/contact')}>🍅?</button>
    </div>
    <h1>Practice and memorize Japanese Numbers 😁</h1>
    <div className="main-container">
        {/* 메뉴바 추가 */}
        <div className="range-selection">
          <p>Pick a range:</p>
          <div className="button-container">
            {ranges.map((range, index) => (
              <button
                key={index}
                onClick={() => setSelectedRange(range.value)}
                className={`range-button ${selectedRange === range.value ? 'active' : ''}`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        {selectedRange && (
          <button className="play-button" onClick={handlePlay}>
            Play
          </button>
        )}
      </div></>
  );
};

export default MainPage;