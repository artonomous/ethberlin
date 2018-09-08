

export function handleGeneratorRegistryEvent(event: RegistryEntryEvent): void {
    let registryEntryAddress = event.params.registryEntry;
    let eventType = event.params.eventType.toString();

    let generatorContract = Generator.bind(registryEntryAddress, event.blockHash);

    let entryData = generatorContract.getGenerator();
    
    if (eventType === 'constructed') {
        let entity = new Entity();
        entity.setString('id', registryEntryAddress.toHex());
        entity.setString('name', entryData.value0);
        entity.setString('creator', entryData.value1.toHex());
        entity.setString('sourceUri', entryData.value2);
        entity.setString('token', entryData.value3.toHex());
        store.set('Generator', registryEntryAddress.toHex(), entity);
    }
}