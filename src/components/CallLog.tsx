import React from "react";
import { ICallLog } from "../types";
import { displayDate } from "../utils";
import moment from "moment";

interface CallLogProps {
  calls: ICallLog[];
  date: string;
}

export const CallLog: React.FC<CallLogProps> = ({ calls, date }) => {
  return (
    <div className="m-b">
      <span className="call-date">{displayDate(date)}</span>
      {calls.map((call) => {
        const { phoneNumber, phoneType, date, id } = call;
        return (
          <div className="log-container" key={id}>
            <div className="letf-item">
              <div className="avatar">#</div>
              <div className="phone-container">
                <span>{phoneNumber}</span>
                <span className="phone-type">{phoneType}</span>
              </div>
            </div>
            <span className="time">{moment(date).format("h:mm a")}</span>
          </div>
        );
      })}
    </div>
  );
};
