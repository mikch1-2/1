// DynamicWord.js
import { useEffect, useState, useRef, useMemo } from 'react';

interface DynamicWordProps {
  words: string[];
  interval: number;
  gradientFrom: string;
  gradientTo: string;
  maxLength: number;
}

export default function DynamicWord({
  words,
  interval,
  gradientFrom,
  gradientTo,
  maxLength,
}: DynamicWordProps) {
  // Use useMemo to memoize validWords
  const validWords = useMemo(() => words.filter((word) => word.length <= maxLength), [words, maxLength]);

  const defaultWord = 'Default';
  const [currentWord, setCurrentWord] = useState(validWords[0] || defaultWord);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const TRANSITION_DURATION = 300;

  const maxWidth = useMemo(() => validWords.reduce((max, word) => Math.max(max, word.length), 0), [validWords]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const changeWord = () => {
      setIsTransitioning(true);
      timeout = setTimeout(() => {
        // Find index using findIndex
        const currentIndex = validWords.findIndex(word => word === currentWord);
        const nextIndex = (currentIndex + 1) % validWords.length;
        setCurrentWord(validWords[nextIndex]);
        setTimeout(() => setIsTransitioning(false), 100);
      }, TRANSITION_DURATION);
    };

    intervalId = setInterval(changeWord, interval);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeout);
    };
  }, [validWords, currentWord, interval]); // Key change: validWords is now a dependency

  return (
    <span
      className="inline-flex items-center" // Add flexbox for alignment
    >
      {/* Wrap the DynamicWord in a span with inline-flex */}
      <span
        className="relative inline-block overflow-hidden"
        style={{ width: `${maxWidth}ch` }}
      >
        <span
          className={`inline-block transition-all duration-500 ease-in-out whitespace-nowrap px-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent ${isTransitioning ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          {currentWord}
        </span>
        <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
      </span>
    </span>
  );
}