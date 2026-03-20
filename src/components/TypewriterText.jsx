import { useState, useEffect } from 'react';

// The phrases that will cycle through
const phrases = [
  "Space Technologist",
  "Software Developer",
  "Dog Lover",
  
];

// Speeds (in milliseconds)
//TODO add a random typing speed for eeach time, change a to add a offset that can be anywhere between -+ 50
const TYPING_SPEED = 100;   // how fast each character is typed
const DELETING_SPEED = 50;  // how fast each character is deleted
const PAUSE_AFTER_TYPED = 1500;  // how long to wait before deleting
const PAUSE_AFTER_DELETED = 400; // how long to wait before typing the next phrase

function TypewriterText() {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    // Pause after fully typed, then start deleting
    if (!isDeleting && displayedText === currentPhrase) {
      const timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
      return () => clearTimeout(timer);
    }

    // Pause after fully deleted, then move to next phrase
    if (isDeleting && displayedText === '') {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, PAUSE_AFTER_DELETED);
      return () => clearTimeout(timer);
    }

    // Type or delete one character at a time
    const nextText = isDeleting
      ? currentPhrase.slice(0, displayedText.length - 1)
      : currentPhrase.slice(0, displayedText.length + 1);

    const timer = setTimeout(() => setDisplayedText(nextText), isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timer);

  }, [displayedText, phraseIndex, isDeleting]);

  return (
    <span>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default TypewriterText;
