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
  supplyBalance: string;
  supplyDistributionAPY: string; // 存款页面分销APY
  borrowAPY: string;
  borrowBalance: string;
  borrowDistributionAPY: string; // 借款页面分销APY
  wallet: string;
  liquidity: string;
  isSupplyEnabled: boolean;
  isRepayEnabled: boolean;
  rateToUsd: string; // 1币可兑多少美元
  totalSupply: string;
  totalBorrow: string;
  supplyEnable: boolean;
  repayEnable: boolean;
}
