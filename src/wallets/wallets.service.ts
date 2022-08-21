import { entropyToMnemonic } from '@ethersproject/hdnode';
import { Injectable } from '@nestjs/common';
import { ethers, Wallet } from 'ethers';
import { contract_did, external_storage } from 'src/wallets/abi';
import {Authentication, Did, PublicKey} from 'src/wallets/responses/did';
@Injectable()
export class WalletService {
  provider: ethers.providers.BaseProvider;

  constructor() {
    this.provider = ethers.providers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/889a0433853d441c9698403ac1267827',
    );
    console.log('init');
    this.testContract();
  }

  private async testContract(): Promise<void> {
    const wallet = Wallet.fromMnemonic(
      'slab trim elevator elite twenty book october giraffe worry arctic spray double',
    );

    const external = new ethers.Contract(
      '0x39BE4860ea0939da6b6BC53C50a2a81b3f8D9D95',
      external_storage,
      this.provider,
    );

    const didContract = new ethers.Contract(
      '0xe8DF3322933500b7a6289b9222121aaAa9f98C7d',
      contract_did,
      this.provider,
    );

    const did = didContract.attach(external.address);
    const didAddress = 'did:etho:' + wallet.address.slice(2).toLowerCase();
    const document = await did.getDocument(didAddress);

    console.log(document);
    const did_documents: Did = {
      '@context': document['context'],
      id: document['id'],
      publicKey: document['publicKey'].map(
        (element: Record<string, PublicKey>) => {
          return {
            id: element.id,
            key_type: element.keyType,
            controller: element.controller,
            pub_key_data: element.pubKeyData,
            deactivated: element.deactivate,
            is_pub_key: element.isPubKey,
            //auth_index: element.auth_index,
          };
        },
      ),
      authentication: document['authentication'].map(
        (element: Record<string, Authentication>) => {
          return {
            id: element.id,
            key_type: element.keyType,
            controller: element.controller,
            pub_key_data: element.pubKeyData,
            deactivated: element.deactivate,
            is_pub_key: element.isPubKey,
            //auth_index: element.auth_index,
          };
        },
      ),

    };
    console.log(did_documents);
    //console.log(document[0][0]);
    //console.log(document);
  }

  public async create(bytes: Uint8Array, password: string): Promise<string> {
    const hdNode = this.generateHDNode(bytes, password);
    const wallet = this.generateWalletFromHDNode(hdNode);
    return await this.saveWalletAsJson(wallet, password);
  }

  public async get(bytes: Uint8Array): Promise<ethers.Wallet> {
    return await this.restoreHDWallet(bytes);
  }

  private async restoreHDWallet(bytes: Uint8Array): Promise<ethers.Wallet> {
    const mnemonic = this.generateMnemonic(bytes);
    return ethers.Wallet.fromMnemonic(mnemonic);
  }
  private async saveWalletAsJson(
    wallet: ethers.Wallet,
    password: string,
  ): Promise<string> {
    return await wallet.encrypt(password);
  }

  private generateMnemonic(entropyBytes: Uint8Array): string {
    return entropyToMnemonic(entropyBytes);
  }

  private generateWalletFromHDNode(hdNode: ethers.utils.HDNode): ethers.Wallet {
    return new ethers.Wallet(hdNode.privateKey);
  }

  private generateHDNode(
    entropyBytes: Uint8Array,
    password: string,
  ): ethers.utils.HDNode {
    const mnemonic = this.generateMnemonic(entropyBytes);
    return ethers.utils.HDNode.fromMnemonic(mnemonic, password);
  }

  private async decryptWallet(
    json: string,
    password: string,
  ): Promise<ethers.Wallet> {
    return ethers.Wallet.fromEncryptedJson(json, password);
  }
}
