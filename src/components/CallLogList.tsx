import React from "react";
import { callLogsData } from "../assets/data";
import { composeCallLogs } from "../utils";
import { CallLog } from "./CallLog";

export const CallLogList: React.FC = () => {
  const logs = composeCallLogs(callLogsData);

  return (
    <div className="container">
      {Object.keys(logs).map((key) => {
        return <CallLog key={key} date={logs[key][0].date} calls={logs[key]} />;
      })}
    </div>
  );
};
