export interface PublicKey {
  id: string;
  type: string;
  controller: string;
  publicKeyHex: string;
}

export interface Authentication {
  id: string;
  key_type: string;
  controller: string[];
  pub_key_data: string;
  deactivated: boolean;
  is_pub_key: boolean;
  auth_index: number;
}

export interface Service {
  id: string;
  type: string;
  service_endpoint: string;
}

export interface Proof {
  id: string;
  type_signature: string;
  proof_purpose: string;
  verification_method: string;
  jws: string;
}

export interface Did {
  '@context'?: string[0];
  id?: string;
  publicKey?: PublicKey[];
  authentication?: Authentication[];
  controller?: string;
  service?: Service[];
  allowers?: string;
  proof?: Proof[];
  update?: number;
}
