
export function handleRegistryEntryEVT(event: RegistryEntryEVT): void {
    let registryEntryAddress = event.params.registryEntry;
    let eventType = event.params.eventType.toString();
  
    let generatorContract = Generator.bind(registryEntryAddress, event.blockHash);
  
    let entryData = generatorContract.getGenerator();
  
    if (eventType == 'constructed') {
        let entity = new Entity();
        // name,creator,sourceUri,token
        entity.setString('id', registryEntryAddress.toHex());
        entity.setString('sourceUri', entryData.value2);
        entity.setString('name', entryData.value0)
        entity.setString('creator', entryData.value1.toHex());
        entity.setString('token', entryData.value3.toHex());
        entity.setString('__typename', 'Generator');
        store.set('Generator', registryEntryAddress.toHex(), entity);
    }
  }