import { entropyToMnemonic } from '@ethersproject/hdnode';
import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
@Injectable()
export class WalletService {
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
    return await ethers.Wallet.fromMnemonic(mnemonic);
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
