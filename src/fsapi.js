import IPFSapi from "ipfs-api";

const infuraIPFS = IPFSapi("ipfs.infura.io", 5001, {
  protocol: "https"
});

export function getTextFileFromPath(cid) {
  return new Promise((resolve, reject) => {
    infuraIPFS.files.cat(cid, (err, file) => {
      if (err) {
        return reject(err);
      }
      console.log("has file! ", file);
      resolve(file.toString("utf-8"));
    });
  });
}

export function createFileFromData(data, path = "upload") {
  return new Promise((resolve, reject) => {
    infuraIPFS.files.add(
      [
        {
          path: `${path}.p5js`,
          content: Buffer.from(data)
        }
      ],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      }
    );
  });
}
