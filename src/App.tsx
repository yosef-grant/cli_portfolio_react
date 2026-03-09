import { useEffect, useState } from "react";
import PrimaryInterface from "./styles/PrimaryInterface";
import CommandTrace from "./Components/CommandTrace";
import CommandLine from "./Components/CommandLine";
import type { Page, ValidInput } from "./types";
import Window from "./Components/Window";
import ContentLoad from "./Components/ContentLoad";

function App() {
  const [trace, setTrace] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [command, setCommand] = useState<ValidInput | null>(null);
  const [activePage, setActivePage] = useState<Page | null>(null);

  useEffect(() => {
    const handleValidCommand = () => {
      switch (command) {
        case "clear":
          setTrace([]);
          break;
        case "about":
        case "contact":
          setTrace([`Preparing to run ${command}.html`]);
          setLoading(true);
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
      {loading && <ContentLoad loading={loading} setLoading={setLoading} />}
      {!loading && (
        <CommandLine
          setTrace={setTrace}
          trace={trace}
          setCommand={setCommand}
        />
      )}
      {activePage && (
        <Window activePage={activePage} setActivePage={setActivePage} />
      )}
    </PrimaryInterface>
  );
}

export default App;
