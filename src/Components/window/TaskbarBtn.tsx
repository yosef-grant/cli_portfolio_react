import React from "react";
import { MaximiseIcon, TaskbarButton } from "../../styles/TaskbarButton";

interface TaskbarBtnProps {
  controlType: "close" | "maximise";
  handleClick: () => void;
}

const TaskbarBtn = ({ controlType, handleClick }: TaskbarBtnProps) => {
  return (
    <TaskbarButton onClick={handleClick}>
      {controlType === "close" ? (
        "X"
      ) : controlType === "maximise" ? (
        <MaximiseIcon />
      ) : (
        ""
      )}
    </TaskbarButton>
  );
};

export default TaskbarBtn;
