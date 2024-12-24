import DynamicWord from './DynamicWord';
import { RANDOM_NAMES, RANDOM_INDUSTRIES } from '../../data/constants';

export default function AnimatedText() {
  return (
    <div className="min-h-[200px] flex items-center justify-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold leading-relaxed tracking-tight w-full max-w-4xl">
        <div className="flex flex-wrap justify-between items-baseline">
          <span>Smart AI solutions helping</span>
          <DynamicWord 
            words={RANDOM_NAMES}
            gradientFrom="from-blue-500"
            gradientTo="to-violet-500"
          />
          <span>in</span>
          <DynamicWord 
            words={RANDOM_INDUSTRIES}
            gradientFrom="from-violet-500"
            gradientTo="to-purple-500"
          />
          <span>scale faster than ever.</span>
        </div>
      </h1>
    </div>
  );
}