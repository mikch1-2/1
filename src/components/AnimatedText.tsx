import { useState, useEffect } from 'react';
import { RANDOM_NAMES, RANDOM_INDUSTRIES } from '../data/constants';
import DynamicWord from './AnimatedText/DynamicWord';

export default function AnimatedText() {
  const [name, setName] = useState(RANDOM_NAMES[0]);
  const [industry, setIndustry] = useState(RANDOM_INDUSTRIES[0]);

  useEffect(() => {
    const updateName = () => {
      const randomName = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
      setName(randomName);
    };

    const updateIndustry = () => {
      const randomIndustry = RANDOM_INDUSTRIES[Math.floor(Math.random() * RANDOM_INDUSTRIES.length)];
      setIndustry(randomIndustry);
    };

    const nameInterval = setInterval(updateName, 2500);
    const industryInterval = setInterval(updateIndustry, 2500);

    return () => {
      clearInterval(nameInterval);
      clearInterval(industryInterval);
    };
  }, []);

  return (
    <div className="min-h-[30vh] flex items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight tracking-tight max-w-4xl mx-auto px-4">
        <span>Smart AI solutions helping </span>
        <DynamicWord
          words={RANDOM_NAMES}
          interval={2500}
          gradientFrom="from-blue-500"
          gradientTo="to-purple-500"
          maxLength={6}
        />
        <span> in </span>
        <DynamicWord
          words={RANDOM_INDUSTRIES}
          interval={2500}
          gradientFrom="from-blue-500"
          gradientTo="to-purple-500"
          maxLength={8}
        />
        <span> scale faster than ever.</span>
      </h1>
    </div>
  );
}