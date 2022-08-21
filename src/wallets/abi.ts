export const external_storage = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'ProxyOwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
    payable: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'data',
    outputs: [
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'didStatus',
    outputs: [
      {
        internalType: 'bool',
        name: 'deactivated',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'authListLen',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'proxyOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferProxyOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true,
  },
  {
    inputs: [],
    name: 'upgradeabilityOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
];

export const contract_did = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
    ],
    name: 'AddAddr',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'context',
        type: 'string',
      },
    ],
    name: 'AddContext',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
    ],
    name: 'AddController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
    ],
    name: 'AddKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
    ],
    name: 'AddNewAuthAddr',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
    ],
    name: 'AddNewAuthKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceType',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceEndpoint',
        type: 'string',
      },
    ],
    name: 'AddService',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'Deactivate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'DeactivateAddr',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'DeactivateAuthAddr',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
    ],
    name: 'DeactivateAuthKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
    ],
    name: 'DeactivateKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'context',
        type: 'string',
      },
    ],
    name: 'RemoveContext',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
    ],
    name: 'RemoveController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceId',
        type: 'string',
      },
    ],
    name: 'RemoveService',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'SetAuthAddr',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
    ],
    name: 'SetAuthKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceType',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'serviceEndpoint',
        type: 'string',
      },
    ],
    name: 'UpdateService',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'data',
    outputs: [
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'didStatus',
    outputs: [
      {
        internalType: 'bool',
        name: 'deactivated',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'authListLen',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateID',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'newPubKey',
        type: 'bytes',
      },
      {
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addNewAuthKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addNewAuthAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
      {
        internalType: 'string',
        name: 'controllerSigner',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addNewAuthKeyByController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'string[]',
        name: 'controller',
        type: 'string[]',
      },
      {
        internalType: 'string',
        name: 'controllerSigner',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addNewAuthAddrByController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'setAuthKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'setAuthAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'setAuthKeyByController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'setAuthAddrByController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateAuthKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateAuthAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'pubKey',
        type: 'bytes',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateAuthKeyByController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'deactivateAuthAddrByController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: 'contexts',
        type: 'string[]',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addContext',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: 'contexts',
        type: 'string[]',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'removeContext',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'org',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addAllower',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'proofId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'typeSignature',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'proofPurpose',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'verificationMethod',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'jws',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addProofCredential',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'removeController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceEndpoint',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'addService',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceEndpoint',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'updateService',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serviceId',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'removeService',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'verifySignature',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'controller',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'singer',
        type: 'bytes',
      },
    ],
    name: 'verifyController',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getAllPubKey',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'keyType',
            type: 'string',
          },
          {
            internalType: 'string[]',
            name: 'controller',
            type: 'string[]',
          },
          {
            internalType: 'bytes',
            name: 'pubKeyData',
            type: 'bytes',
          },
          {
            internalType: 'bool',
            name: 'deactivated',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isPubKey',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'authIndex',
            type: 'uint256',
          },
        ],
        internalType: 'struct StorageUtils.PublicKey[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getAllAuthKey',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'keyType',
            type: 'string',
          },
          {
            internalType: 'string[]',
            name: 'controller',
            type: 'string[]',
          },
          {
            internalType: 'bytes',
            name: 'pubKeyData',
            type: 'bytes',
          },
          {
            internalType: 'bool',
            name: 'deactivated',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isPubKey',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'authIndex',
            type: 'uint256',
          },
        ],
        internalType: 'struct StorageUtils.PublicKey[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getContext',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getAllAllowers',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getAllController',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getAllService',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'serviceId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'serviceType',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'serviceEndpoint',
            type: 'string',
          },
        ],
        internalType: 'struct StorageUtils.Service[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getProof',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'typeSignature',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'proofPurpose',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'verificationMethod',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'jws',
            type: 'string',
          },
        ],
        internalType: 'struct StorageUtils.Proof[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getUpdatedTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string',
      },
    ],
    name: 'getDocument',
    outputs: [
      {
        components: [
          {
            internalType: 'string[]',
            name: 'context',
            type: 'string[]',
          },
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'id',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'keyType',
                type: 'string',
              },
              {
                internalType: 'string[]',
                name: 'controller',
                type: 'string[]',
              },
              {
                internalType: 'bytes',
                name: 'pubKeyData',
                type: 'bytes',
              },
              {
                internalType: 'bool',
                name: 'deactivated',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isPubKey',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'authIndex',
                type: 'uint256',
              },
            ],
            internalType: 'struct StorageUtils.PublicKey[]',
            name: 'publicKey',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'id',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'keyType',
                type: 'string',
              },
              {
                internalType: 'string[]',
                name: 'controller',
                type: 'string[]',
              },
              {
                internalType: 'bytes',
                name: 'pubKeyData',
                type: 'bytes',
              },
              {
                internalType: 'bool',
                name: 'deactivated',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isPubKey',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'authIndex',
                type: 'uint256',
              },
            ],
            internalType: 'struct StorageUtils.PublicKey[]',
            name: 'authentication',
            type: 'tuple[]',
          },
          {
            internalType: 'string[]',
            name: 'controller',
            type: 'string[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'serviceId',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'serviceType',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'serviceEndpoint',
                type: 'string',
              },
            ],
            internalType: 'struct StorageUtils.Service[]',
            name: 'service',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'updated',
            type: 'uint256',
          },
          {
            internalType: 'string[]',
            name: 'allowers',
            type: 'string[]',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'id',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'typeSignature',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'proofPurpose',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'verificationMethod',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'jws',
                type: 'string',
              },
            ],
            internalType: 'struct StorageUtils.Proof[]',
            name: 'proof',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct StorageUtils.DIDDocument',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
];
