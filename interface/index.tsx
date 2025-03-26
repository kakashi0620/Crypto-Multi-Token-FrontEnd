export interface IPresale {
  startTime: bigint;
  endTime: bigint;
  price: bigint;
  nextStagePrice: bigint;
  Sold: bigint;
  tokensToSell: bigint;
  UsdtHardcap: bigint;
  amountRaised: bigint;
  Active: boolean;
}
