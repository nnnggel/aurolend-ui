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
export interface IToken {
  token: string;
  name: string;
  supplyAPY: string;
  borrowAPY: string;
  wallet: string;
  liquidity: string;
  isEnabled: boolean;
}
