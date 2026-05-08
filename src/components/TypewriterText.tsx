import { cn } from '@utils/cn';

type TypewriterTextProps = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
};

export const TypewriterText = ({
  text,
  delay = 400,
  speed = 60,
  className
}: TypewriterTextProps) => {
  const typingDuration = text.length * speed;

  return (
    <p className={cn('text-2xl max-[336px]:text-xl', className)}>
      <span className="relative inline-block">
        <span className="invisible select-none" aria-hidden="true">
          {text}
        </span>
        <span
          className="animate-typewriter absolute left-0 top-0 h-full overflow-hidden whitespace-nowrap border-r-2 border-transparent"
          style={
            {
              '--typewriter-fn': `steps(${text.length}, end)`,
              '--typewriter-duration': `${typingDuration}ms`,
              '--typewriter-delay': `${delay}ms`,
              '--typewriter-blink-delay': `${delay + typingDuration}ms`
            } as React.CSSProperties
          }
        >
          {text}
        </span>
      </span>
    </p>
  );
};
