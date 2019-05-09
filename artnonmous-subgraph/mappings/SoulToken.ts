import {LogMint, LogWithdraw, Transfer, SoulToken as SoulTokenContract} from '../generated/SoulToken/SoulToken';
import {SoulToken} from '../generated/schema';
import {
  Address,
} from "@graphprotocol/graph-ts";


function updateTokenBalanceHelper(sender: Address, soulTokenInstance: SoulTokenContract): void {
  let balance = soulTokenInstance.balanceOf(sender);
  
  // let entity = new SoulToken(soulTokenInstance._address.toHex());//sender.toHex());
  let entity = new SoulToken(sender.toHex());
  entity.balance = balance;
  entity.owner = sender.toHex();
  // entity.setU256('balance', balance);
  // entity.setString('owner', sender.toHex());
  // entity.setString('id', sender.toHex());
  // entity.setString('__typename', 'SoulToken');
  // store.set('SoulToken', soulTokenInstance.address.toHex(), entity);
  entity.save();
}

export function logMintHandler(event: LogMint): void {
  let sender = event.params.sender;
  let soulTokenInstance = SoulTokenContract.bind(event.address);
  // let soulTokenInstance = SoulToken.bind(event.address, event.blockHash);
  updateTokenBalanceHelper(sender, soulTokenInstance);
}

export function logWithdrawHandler(event: LogWithdraw): void {
  let sender = event.params.sender;
  let soulTokenInstance = SoulTokenContract.bind(event.address);
  // let soulTokenInstance = SoulToken.bind(event.address, event.blockHash);
  updateTokenBalanceHelper(sender, soulTokenInstance);
}

export function logTransferHandler(event: Transfer): void {
  // todo log
}