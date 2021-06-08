import React from "react";
import { ICallLog } from "../types";
import { displayDate } from "../utils";
import moment from "moment";

export const CallLog: React.FC<ICallLog> = ({
  phoneNumber,
  phoneType,
  date,
}) => {
  return (
    <React.Fragment>
      <span className="call-date">{displayDate(date)}</span>
      <div className="log-container">
        <div className="letf-item">
          <div className="avatar">#</div>
          <div className="phone-container">
            <span>{phoneNumber}</span>
            <span className="phone-type">{phoneType}</span>
          </div>
        </div>
        <span className="time">{moment(date).format("h:mm a")}</span>
      </div>
    </React.Fragment>
  );
};
