import React from "react";
import { callLogsData } from "../assets/data";
import { compare } from "../utils";
import { CallLog } from "./CallLog";

export const CallLogList: React.FC = () => {
  return (
    <div className="container">
      {callLogsData
        .sort((a, b) => compare(a, b, "desc"))
        .map((log) => (
          <CallLog key={log.id} {...log} />
        ))}
    </div>
  );
};
