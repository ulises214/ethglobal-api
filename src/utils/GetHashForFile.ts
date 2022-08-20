import * as crypto from 'crypto';
import * as CryptoJS from 'crypto-js';
export const getHashFromFile = (file: Buffer): Uint8Array => {
  // Algorithm depends on availability of OpenSSL on platform
  // Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
  const algorithm = 'md5',
    shasum = crypto.createHash(algorithm);
  shasum.update(file);
  const hashRaw = shasum.digest('hex');
  const hash = CryptoJS.SHA256(hashRaw);
  const buffer = Buffer.from(hash.toString(CryptoJS.enc.Hex), 'hex');
  const array = new Uint8Array(buffer);
  return array;
};
