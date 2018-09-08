FROM rust:latest

RUN apt-get update \
    && apt-get install -y clang libclang-dev bash

COPY ./graph-node/ .
RUN cd node && cargo install --bins
RUN cargo build -p graph-node --release

#ENTRYPOINT cargo run -p graph-node --release -- --ethereum-rpc 7545 --ipfs ipfs:5001 --postgres-url postgresql://docker:password@pg:5432/artonomous-subgraph --subgraph QmaZ9y1LvQuttL8ffYaHhQQPuizvsCVE3pzPxCZ8f5Abng
