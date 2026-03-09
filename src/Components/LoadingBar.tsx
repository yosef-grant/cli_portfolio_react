import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { AnimatedLoadingBar } from "../styles/Loader";

const LoadingBar: FC<{
  percentage: number;
  setPercentage: Dispatch<SetStateAction<number>>;
}> = ({ percentage, setPercentage }) => {
  const AnimatedLoader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("current percentage: ", percentage);

    // ! replace with loading bar inner with increasing width, loading bar outer with beginning state
    // ! style inner/bar as a ref rather than via props`
    if (percentage >= 100) {
      return;
    } else if (percentage < 100) {
      const load = setInterval(() => {
        const ranPercentage = Math.floor(Math.random() * (15 - 1 * 1));

        const nPercentage =
          percentage + ranPercentage > 100
            ? percentage + (100 - percentage)
            : percentage + ranPercentage;

        console.log(
          "random: ",
          ranPercentage,
          "\ncurrent: ",
          percentage,
          "\nnew: ",
          nPercentage,
        );

        setPercentage(nPercentage);
        if (AnimatedLoader.current) {
          AnimatedLoader.current.style.width = `${nPercentage}%`;
        }
      }, 250);
      return () => clearInterval(load);
    }
  }, [percentage]);
  return (
    <div className="loading-outer">
      <div className="loading-inner" ref={AnimatedLoader}></div>
    </div>
  );

  // <AnimatedLoadingBar $percentage={percentage} />;
};

export default LoadingBar;
