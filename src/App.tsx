import { useEffect, useState } from "react";
import PrimaryInterface from "./styles/PrimaryInterface";
import CommandTrace from "./Components/CommandTrace";
import CommandLine from "./Components/CommandLine";

function App() {
  const [trace, setTrace] = useState<string[]>(["testing", "a", "theory"]);


  useEffect(() => {

    console.log('trace updated: ', trace)
  }, [trace])
  return (
    <PrimaryInterface>
      <CommandTrace trace={trace} />
      <CommandLine setTrace={setTrace} />
    </PrimaryInterface>
  );
}

export default App;
