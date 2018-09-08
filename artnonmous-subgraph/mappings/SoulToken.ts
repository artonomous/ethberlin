function updateTokenBalanceHelper(sender: Address, soulTokenInstance: SoulToken): void {
  let balance = soulTokenInstance.balanceOf(sender);

  let entity = new Entity();
  entity.setU256('balance', balance);
  entity.setString('owner', sender.toHex());
  entity.setString('id', sender.toHex());
  entity.setString('__typename', 'SoulToken');
  store.set('SoulToken', soulTokenInstance.address.toHex(), entity);
}

export function logMintHandler(event: LogMint): void {
  let sender = event.params.sender;
  let soulTokenInstance = SoulToken.bind(event.address, event.blockHash);
  updateTokenBalanceHelper(sender, soulTokenInstance);
}

export function logWithdrawHandler(event: LogWithdraw): void {
  let sender = event.params.sender;
  let soulTokenInstance = SoulToken.bind(event.address, event.blockHash);
  updateTokenBalanceHelper(sender, soulTokenInstance);
}

export function logTransferHandler(event: Transfer): void {
  // todo log
}