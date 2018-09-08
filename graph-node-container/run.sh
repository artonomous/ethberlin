#!/bin/bash
echo "Has subgraph: $1"

# local ganache
docker-compose run -p 8000:8000 -p 8001:8001 -p 8020:8020 graph-node target/release/graph-node --ethereum-rpc http://docker.for.mac.localhost:7545 --ipfs 172.18.18.10:5001 --postgres-url postgresql://docker:password@172.18.18.20:5432/artonomous-subgraph --subgraph $1

# infura
# docker-compose run -p 8000:8000 -p 8001:8001 -p 8020:8020 graph-node target/release/graph-node --ethereum-ws wss://mainnet.infura.io/_ws --ipfs 172.18.18.10:5001 --postgres-url postgresql://docker:password@172.18.18.20:5432/artonomous-subgraph --subgraph $1