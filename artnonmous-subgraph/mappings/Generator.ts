import {RegistryEntryEVT} from '../generated/GeneratorRegistry/GeneratorRegistry';
import {Generator as GeneratorContract} from '../generated/GeneratorRegistry/Generator';
import {Generator} from '../generated/schema';


export function handleRegistryEntryEVT(event: RegistryEntryEVT): void {
    let registryEntryAddress = event.params.registryEntry;
    let eventType = event.params.eventType.toString();
  
    // let generatorContract = Generator.bind(registryEntryAddress, event.params.context.blockHash);
    let generator = GeneratorContract.bind(registryEntryAddress);
  
    // let entryData = generatorContract.getGenerator();
  
    if (eventType == 'constructed') {
        let entity = new Generator(registryEntryAddress.toHex());
        // entity.sourceUri = entryData.value2;
        entity.sourceUri = generator.sourceUri();
        // entity.name = entryData.value0;
        entity.name = generator.name();
        // entity.creator = entryData.value1.toHex();
        entity.creator = generator.creator().toHex();
        // entity.token = entryData.value3.toHex();
        entity.token = generator.token().toHex();

        entity.save();

        // // name,creator,sourceUri,token
        // entity.setString('id', registryEntryAddress.toHex());
        // entity.setString('sourceUri', entryData.value2);
        // entity.setString('name', entryData.value0)
        // entity.setString('creator', entryData.value1.toHex());
        // entity.setString('token', entryData.value3.toHex());
        // entity.setString('__typename', 'Generator');
        // store.set('Generator', registryEntryAddress.toHex(), entity);
    }
  }