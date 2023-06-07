import React, { useState, useEffect } from 'react';

const TypingTextAnimation = ({texts}) => {
  const [text, setText] = useState('');
  const fullText = texts; // Replace with your desired text

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;

    const animateText = () => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex = (currentIndex + 1) % fullText.length;
      timeoutId = setTimeout(animateText, 450); // Adjust the typing speed (in milliseconds) here
    };

    timeoutId = setTimeout(animateText, 1000); // Adjust the delay (in milliseconds) before starting the animation

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TypingTextAnimation;
