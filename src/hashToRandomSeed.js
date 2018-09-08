export default function(ipfsHash) {
  var hash = ipfsHash;
  var seed = 0.0;
  for(let i=0;i<hash.length;i++) {
      seed += parseInt(hash.charAt(i), 16) / 16;
  }
  seed /= hash.length;
  console.log('seed = ' + seed);
}
