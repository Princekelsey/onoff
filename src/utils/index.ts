import { ICallLog } from "../types";
import moment, { Moment } from "moment";

const REFERENCE = moment();
const TODAY = REFERENCE.clone().startOf("day");
const YESTERDAY = REFERENCE.clone().subtract(1, "days").startOf("day");

/**
 * Compares calllogs properties for sorting.
 * @param  a first log to compare
 * @param  b second log to compare
 * @param  sortDirection order of the sort
 * @returns Returns 1 | -1 | 0
 */
export const compare = (
  a: ICallLog,
  b: ICallLog,
  sortDirection: "desc" | "asce"
): 1 | -1 | 0 => {
  if (sortDirection === "asce") {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  } else {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  }
};

/**
 * Checks if date is today.
 * @param  date date of the call
 * @returns Returns true | false
 */
const isToday = (date: Moment) => {
  return date.isSame(TODAY, "day");
};

/**
 * Checks if date is yesterday.
 * @param  date date of the call
 * @returns Returns true | false
 */
const isYesterday = (date: Moment) => {
  return date.isSame(YESTERDAY, "day");
};

/**
 * Checks date to display correct date format.
 * @param  date date of the call
 * @returns Returns formated date
 */
export const displayDate = (date: string) => {
  if (isToday(moment(date))) {
    return "Today";
  } else if (isYesterday(moment(date))) {
    return "Yesterday";
  } else {
    return moment(date).format("MMMM Do");
  }
};
