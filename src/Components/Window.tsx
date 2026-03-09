import React, {
  useEffect,
  useRef,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import MainWindow from "../styles/MainWindow";
import type { Page } from "../types";

const Window: FC<{
  activePage: Page | null;
  setActivePage: Dispatch<SetStateAction<Page | null>>;
}> = ({ activePage, setActivePage }) => {
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      activePage &&
      main?.current &&
      !main?.current?.classList.contains("display")
    ) {
      main.current.classList.add("display");
    }
  }, [activePage]);

  const handleWindowClose = () => {
    // if (main.current) {
    //   main.curre
    // }
    main?.current?.classList.remove("display");
    setTimeout(() => {
      setActivePage(null);
    }, 200);
  };

  return (
    <MainWindow ref={main}>
      <div className="taskbar">
        <h4>{`${activePage}.html`}</h4>
        <div className="controls">
          <button onClick={handleWindowClose}>X</button>
        </div>
      </div>
    </MainWindow>
  );
};

export default Window;
