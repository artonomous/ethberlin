# Artnonmous ETHBerlin Hack

## Key Directory Structure
* `artnonmous-subgraph/`: Holds the subgraph for thegraph.com's engine
* `graph-node-container/`: Custom scripts and runtime configuration (in docker) to run the graph-node-container locally
* `src/`: Holds the front-end web application source code
* `contracts/`: Holds the solidity contracts that run the backbone of the application 

## Preview!
http://artonomous-ethberlin.s3-website-us-east-1.amazonaws.com/

## Deployment
* To develop the frontend: `docker-compose up` in the root directory
* To build the frontend: `yarn build`.
* To build the graph-node-container dep containers: 
  * `cd graph-node-container && docker-compose`
* To generate the ipfs 
  * First, the graph-node-container cluster needs to be running, or at least IPFS
  * Second, `node genAbi.js` needs to be run from the root directory if any of the solidity contracts are changed, after they have been compiled to `build/`
  * Third, `yarn build-ipfs` builds the subgraph code from the yaml manifest and the graphql and bootstrap typescript files into a ipfs hash, which is printed upon completion. This hash is needed to run the graph-node-container.
* To run the `graph-node-container`, with the docker images for postgres and ipfs running, run `./run.sh IPFS_SUBGRAPH_HASH` which starts the server on localhost:8000.
* Finally, the frontend graphql server can be configured in `src/apollo.js` and the ipfs endpoint in `src/fsapi.js`.
