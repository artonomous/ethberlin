# Run graph-node locally

### Step 1:
Build docker image: `docker-compose up --build`

### Step 2:
Run graph-node: `./run.sh IPFS_SUBGRAPH_HASH`

### Step 3:
Access graphql query interface at :8000
and graphql interface subscription ws at :8001
Admin interface at :8020

Notes:
* Ganache is running locally and bound to 0.0.0.0
* Localhost port 8000 is graphql server from graph-node
