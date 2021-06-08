export interface ICallLog {
  phoneNumber: string;
  date: string;
  id: string;
  phoneType: string;
}

export interface ILogData {
  [key: string]: ICallLog[];
}
