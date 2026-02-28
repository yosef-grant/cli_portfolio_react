import React, { type FC } from "react";
import { v4 as uuidv4 } from "uuid";

const CommandTrace: FC<{ trace: string[] }> = ({ trace }) => {
  return (
    <div>
      {trace.map((traceCommand) => (
        <p key={uuidv4()}>{traceCommand}</p>
      ))}
    </div>
  );
};

export default CommandTrace;
