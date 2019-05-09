import IPFSapi from "ipfs-http-client";

const infuraIPFS = IPFSapi("ipfs.infura.io", 5001, {
  protocol: "https"
});

export function getTextFileFromPath(cid) {
  return new Promise((resolve, reject) => {
    infuraIPFS.cat(cid, (err, file) => {
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
    infuraIPFS.add(
      [
        {
          path: `${path}.p5js`,
          content: typeof data === "string" ? Buffer.from(data) : data
        }
      ],
      {
        pin: true,
      },
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
        try {
          // infuraIPFS.pin(res.Hash);
        } catch(e) {
          console.error(e);
        }
      }
    );
  });
}
