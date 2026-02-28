import React, {
  useRef,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
  type SubmitEventHandler,
} from "react";
import { CommandLineInput } from "../styles/CommandLine";

const CommandLine: FC<{ setTrace: Dispatch<SetStateAction<string[]>> }> = ({
  setTrace,
}) => {
  const commandInput = useRef<null | HTMLInputElement>(null);
  const commandDefault: string = `<C:/applications/yosef_grant_portfolio>`;

  const handleCommandInput: SubmitEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    const val = e.target.command.value as string;

    console.log("new command submitted!", val);
    if (commandInput.current) {
      commandInput.current.value = "";
    }
// ! submitting trace update x2
    setTrace((trace) => {
      console.log('setting trace state')
      const x = trace;
      x.push(val);
      return JSON.parse(JSON.stringify(x));
    });
  };

  return (
    <CommandLineInput onSubmit={handleCommandInput}>
      <span>{commandDefault}</span>
      <input name="command" type="text" ref={commandInput} />
    </CommandLineInput>
  );
};

export default CommandLine;
