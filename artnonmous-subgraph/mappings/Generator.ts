
export function handleRegistryEntryEVT(event: RegistryEntryEVT): void {
    let registryEntryAddress = event.params.registryEntry;
    let eventType = event.params.eventType.toString();

    let generatorContract = Generator.bind(registryEntryAddress, event.blockHash);

    let entryData = generatorContract.getGenerator();

    if (eventType == 'constructed') {
        let entity = new Entity();
        entity.setString('id', registryEntryAddress.toHex());
        entity.setString('sourceUri', entryData.value2);
        entity.setString('name', entryData.name)
        entity.setString('creator', entryData.creator);
        store.set('Generator', registryEntryAddress.toHex(), entity);
    }
}
