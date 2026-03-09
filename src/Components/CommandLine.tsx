import React, {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
  type SubmitEventHandler,
} from "react";
import { CommandLineInput } from "../styles/CommandLine";
import type { ValidInput } from "../types";

const validCommands: ValidInput[] = ["about", "contact", "help", "clear"];

const CommandLine: FC<{
  setTrace: Dispatch<SetStateAction<string[]>>;
  trace: string[];
  setCommand: Dispatch<SetStateAction<ValidInput | null>>;
}> = ({ setTrace, trace, setCommand }) => {
  const commandInput = useRef<null | HTMLInputElement>(null);
  const commandDefault: string = `<C:/applications/yosef_grant_portfolio>`;

  useEffect(() => {
    const addInputFocus = () => {
      if (commandInput?.current) {
        commandInput.current.focus();
      }
    };
    window.addEventListener("click", addInputFocus);

    return () => {
      window.removeEventListener("click", addInputFocus);
    };
  }, []);

  const handleCommandInput: SubmitEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    const val = e.target.command.value as string | ValidInput;

    console.log("new command submitted!", val);
    if (commandInput.current) {
      commandInput.current.value = "";
    }
    const x = trace;
    if (validCommands.includes(val as ValidInput)) {
      x.push(val);
      setCommand(val as ValidInput);
      console.log("valid commmand! update interface");
    } else {
      x.push(
        `"${val}" is not a recognised command!\nType "HELP" to see a list of available commands`,
      );
      console.log("invalid command - show error!");
    }
    setTrace(JSON.parse(JSON.stringify(x)));
  };

  return (
    <CommandLineInput onSubmit={handleCommandInput}>
      <span>{commandDefault}</span>
      <input name="command" type="text" ref={commandInput} autoFocus={true} />
    </CommandLineInput>
  );
};

export default CommandLine;
