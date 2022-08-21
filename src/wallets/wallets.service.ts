import { entropyToMnemonic } from '@ethersproject/hdnode';
import { Injectable } from '@nestjs/common';
import { ethers, Wallet } from 'ethers';
import { contract_did, external_storage } from '../wallets/abi';
import {
  Authentication,
  Did,
  Proof,
  PublicKey,
  Service,
} from '../wallets/responses/did';
import { Web3StorageService } from '../web3-storage/web3-storage.service';
import { CreateWalletResponse } from './responses/create-wallet';
import { showWalletTemplate } from './templates/show-wallet-template';
@Injectable()
export class WalletService {
  provider: ethers.providers.BaseProvider;

  constructor(private readonly web3StorageService: Web3StorageService) {
    this.provider = ethers.providers.getDefaultProvider(
      'https://polygon-rpc.com/',
    );

    const wallet = Wallet.fromMnemonic(
      'exhibit fold gasp alley fiber hover cabin confirm spawn mansion foot arena',
    );

    this.createDID(wallet);
  }

  private async createDID(wallet: Wallet): Promise<Did> {
    const external = new ethers.Contract(
      '0xbc5aDa7d2E7f255787d0Ad6E2E5b4f69cA892f64',
      external_storage,
      this.provider,
    );

    const didContract = new ethers.Contract(
      '0x9781a69f028b3547D9D08AD3F9675e0179EE9b30',
      contract_did,
      this.provider,
    );

    const did = didContract.attach(external.address);
    const didAddress = 'did:etho:' + wallet.address.slice(2).toLowerCase();
    const document = await did.getDocument(didAddress);

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
      controller: document['controller'],
      service: document['service'].map((element: Record<string, Service>) => {
        return {
          id: element.id,
          type: element.type,
          service_endpoint: element.serviceEndpoint,
          //auth_index: element.auth_index,
        };
      }),
      allowers: document['allowers'],
      proof: document['proof'].map((element: Record<string, Proof>) => {
        return {
          id: element.id,
          type_signature: element.typeSignature,
          proof_purpose: element.proofPurpose,
          verification_method: element.verificationMethod,
          jws: element.jws,
          //auth_index: element.auth_index,
        };
      }),
    };

    console.log(did_documents)
    return did_documents;
  }

  public async create(
    bytes: Uint8Array,
    password: string,
  ): Promise<CreateWalletResponse> {
    const hdNode = this.generateHDNode(bytes, password);
    const wallet = this.generateWalletFromHDNode(hdNode);
    const did = await this.createDID(wallet);
    const html = this.replaceHtmlData(wallet.address, did);
    const cid = await this.web3StorageService.upload(
      Buffer.from(html, 'utf-8'),
      'text/html',
    );
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey,
      qrUri: `https://${cid}.ipfs.w3s.link/file.html`,
    };
  }

  public async get(bytes: Uint8Array): Promise<ethers.Wallet> {
    return await this.restoreHDWallet(bytes);
  }
  private replaceHtmlData(address: string, did: Did): string {
    const vars: [RegExp, string][] = [
      [/{{ADDRESS}}/g, address],
      [/{{DID_CONTEXT}}/g, JSON.stringify(did['@context'] ?? '', null, 2)],
      [/{{DID_ID}}/g, JSON.stringify(did.id ?? '', null, 2)],
      [/{{DID_PUBLIC_KEY}}/g, JSON.stringify(did.publicKey ?? '', null, 2)],
      [
        /{{DID_AUTHENTICATION}}/g,
        JSON.stringify(did.authentication ?? '', null, 2),
      ],
      [/{{DID_SERVICE}}/g, JSON.stringify(did.service ?? '', null, 2)],
      [/{{DID_ALLOWERS}}/g, JSON.stringify(did.allowers ?? '', null, 2)],
      [/{{DID_PROOF}}/g, JSON.stringify(did.proof ?? '', null, 2)],
      [/{{DID_UPDATE}}/g, JSON.stringify(did.update ?? '', null, 2)],
    ];
    let html = showWalletTemplate;
    for (const [key, value] of vars) {
      console.log(key, value);
      html = html.replace(key, value);
    }
    return html;
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
    return ethers.utils.HDNode.fromMnemonic(
      mnemonic,
      //password
    );
  }

  private async decryptWallet(
    json: string,
    password: string,
  ): Promise<ethers.Wallet> {
    return ethers.Wallet.fromEncryptedJson(json, password);
  }
}
