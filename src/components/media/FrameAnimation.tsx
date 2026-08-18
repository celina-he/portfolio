import { useEffect, useState } from "react";

type FrameAnimationProps = {
  frames: string[];
  interval?: number;
};

export function FrameAnimation({
  frames,
  interval = 350,
}: FrameAnimationProps) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [frames.length, interval]);

  return (
    <img
      src={frames[currentFrame]}
      alt=""
      className="h-72 object-contain"
    />
  );
}