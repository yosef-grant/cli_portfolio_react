import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import { LoadingWrapper } from "../styles/Loader";
import LoadingBar from "./LoadingBar";

const ContentLoad: FC<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}> = ({ loading, setLoading }) => {
  const [percentage, setPercentage] = useState<number>(0);






  return (
    <LoadingWrapper>
      <LoadingBar percentage={percentage} setPercentage={setPercentage} />
      <span>Loading...</span>
    </LoadingWrapper>
  );
};

export default ContentLoad;
