import {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { LoadingWrapper } from "../styles/Loader";
import LoadingBar from "./LoadingBar";
import type { Page, TraceLine, ValidInput } from "../types";

const ContentLoad: FC<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  trace: TraceLine[];
  setTrace: Dispatch<SetStateAction<TraceLine[]>>;
  activePage: Page | null;
  setShowWindow: Dispatch<SetStateAction<boolean>>;
}> = ({ loading, setLoading, trace, setTrace, activePage, setShowWindow }) => {
  const [percentage, setPercentage] = useState<number>(0);

  const updateMessages: string[] = [
    "Parsing markup...",
    "Applying styles...",
    "Loading scripts...",
  ];

  useEffect(() => {
    if (
      percentage > 10 &&
      percentage <= 20 &&
      !trace.find((traceLine) => traceLine.msg === updateMessages[0])
    ) {
      setTrace([...trace, { msg: updateMessages[0], showDirectory: false }]);
    } else if (
      percentage >= 50 &&
      !trace.find((traceLine) => traceLine.msg === updateMessages[1])
    ) {
      setTrace([
        ...trace,
        {
          msg: updateMessages[1],
          showDirectory: false,
        },
      ]);
    } else if (
      percentage >= 75 &&
      !trace.find((traceLine) => traceLine.msg === updateMessages[2])
    ) {
      setTrace([
        ...trace,
        {
          msg: updateMessages[2],
          showDirectory: false,
        },
      ]);
    } else if (percentage === 100) {
      setLoading(false);
      setTrace([
        ...trace,
        {
          msg: `${activePage}.html completed loading! Running...`,
          showDirectory: false,
        },
      ]);
      setTimeout(() => {
        setShowWindow(true);
      }, 750);
    }
    // 20 50 75
  }, [percentage]);

  return (
    <LoadingWrapper>
      <LoadingBar percentage={percentage} setPercentage={setPercentage} />
      <span>LOADING</span>
    </LoadingWrapper>
  );
};

export default ContentLoad;
