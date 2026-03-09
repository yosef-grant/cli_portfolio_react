import React, { type FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { CommandTraceLine } from "../styles/CommandTrace";

const CommandTrace: FC<{ trace: string[] }> = ({ trace }) => {
  return (
    <div>
      {trace.map((traceCommand) => (
        <CommandTraceLine key={uuidv4()}>
          <span>{"<C:/applications/yosef_grant_portfolio>"}</span>
          <p>{traceCommand}</p>
        </CommandTraceLine>
      ))}
    </div>
  );
};

export default CommandTrace;
