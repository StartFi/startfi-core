import { testAcceptBid } from "./test-cases/accept-bid";
import { testBidToken } from "./test-cases/bid-token";
import { testBuyToken } from "./test-cases/buy-token";
import { testDelistToken } from "./test-cases/delist-token";
import { testListToken } from "./test-cases/list-token";
import { testWithdrawBid } from "./test-cases/withdraw-bid";

contract("NFTKEYMarketPlaceV1", (accounts) => {
  // List
  describe("List token", async () => testListToken(accounts));

  // Delist
  describe("Delist token", async () => testDelistToken(accounts));

  // Bid
  describe("Bid token", async () => testBidToken(accounts));

  // Withdraw bid
  describe("Withdraw token bid", async () => testWithdrawBid(accounts));

  // Buy token
  describe("Buy token", async () => testBuyToken(accounts));

  // Accept bid
  describe("Accept bid", async () => testAcceptBid(accounts));
});

// Transfer
