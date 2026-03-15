import { useEffect, useState } from "react";
import PrimaryInterface from "./styles/PrimaryInterface";
import CommandTrace from "./Components/CommandTrace";
import CommandLine from "./Components/CommandLine";
import type { Page, TraceLine, ValidInput } from "./types";
import Window from "./Components/Window";
import ContentLoad from "./Components/ContentLoad";

function App() {
  const [trace, setTrace] = useState<TraceLine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [command, setCommand] = useState<ValidInput | null>(null);
  const [activePage, setActivePage] = useState<Page | null>(null);
  const [hideInput, setHideInput] = useState<boolean>(false);
  const [showWindow, setShowWindow] = useState<boolean>(false);

  useEffect(() => {
    const handleValidCommand = () => {
      switch (command) {
        case "clear":
          setTrace([]);
          break;
        case "about":
        case "contact":
          setTrace([
            {
              msg: `Preparing to run ${command}.html`,
              showDirectory: false,
            },
          ]);
          setHideInput(true);
          setLoading(true);
          setActivePage(command);
          break;
        default:
          break;
      }
      setCommand(null);
    };
    if (command) {
      console.log(`new valid command: ${command}`);
      handleValidCommand();
    }
  }, [command]);

  useEffect(() => {
    console.log("rendering app!");
  }, []);

  return (
    <PrimaryInterface>
      <CommandTrace trace={trace} />
      {loading && (
        <ContentLoad
          loading={loading}
          setLoading={setLoading}
          trace={trace}
          setTrace={setTrace}
          activePage={activePage}
          setShowWindow={setShowWindow}
        />
      )}
      {!hideInput && (
        <CommandLine
          setTrace={setTrace}
          trace={trace}
          setCommand={setCommand}
        />
      )}
      {activePage && showWindow && (
        <Window
          activePage={activePage}
          setActivePage={setActivePage}
          setHideInput={setHideInput}
        />
      )}
    </PrimaryInterface>
  );
}

export default App;
