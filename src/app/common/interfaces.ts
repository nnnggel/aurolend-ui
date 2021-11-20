export interface IEventEmit {
  type: string;
  value?: any;
}
export interface ISignData {
  name: string;
  type: string;
}
export interface ITransSign {
  r: string;
  s: string;
  v: string;
}
export interface IRandom {
  random: string;
  explain: string;
}
