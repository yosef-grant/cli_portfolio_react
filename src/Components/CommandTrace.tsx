import React, { type FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { CommandTraceLine } from "../styles/CommandTrace";
import type { TraceLine } from "../types";

const CommandTrace: FC<{ trace: TraceLine[] }> = ({ trace }) => {
  return (
    <div>
      {trace.map((traceLine) => (
        <CommandTraceLine key={uuidv4()}>
          {!!traceLine.showDirectory && (
            <span>{"<C:/applications/yosef_grant_portfolio>"}</span>
          )}
          <p>{traceLine.msg}</p>
        </CommandTraceLine>
      ))}
    </div>
  );
};

export default CommandTrace;
