import web3 from "./web3"
const address = "0x8CaD14504b1a9E1e781DbCa9D093cE71a5D25268"

const abi = [
    {
      anonymous: false,
      inputs: [ [Object], [Object], [Object], [Object] ],
      name: 'TaskCreated',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x958b88abf2e68af5e9bc0888fd4c508aaa67194884617ab2b45471e4de2b6949'
    },
    {
      anonymous: false,
      inputs: [ [Object] ],
      name: 'TaskDeleted',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0xd078b251d950cc55c44340be1db732337ef4939a76e1367ee271ad2cb19c46af'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object] ],
      name: 'TaskStatusToggled',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0xc63c34089ec3ca7025b2576e9e17e226d1e6c33f64661975d35df1cea0c0a60d'
    },
    {
      inputs: [ [Object], [Object] ],
      name: 'createTask',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      constant: undefined,
      payable: undefined,
      signature: '0x292a4585'
    },
    {
      inputs: [ [Object] ],
      name: 'deleteTask',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      constant: undefined,
      payable: undefined,
      signature: '0x560f3192'
    },
    {
      inputs: [ [Object] ],
      name: 'getTaskById',
      outputs: [ [Object], [Object], [Object], [Object], [Object] ],   
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x976217cd'
    },
    {
      inputs: [],
      name: 'getTaskIds',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0xbcd14805'
    },
    {
      inputs: [ [Object] ],
      name: 'toggleDone',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      constant: undefined,
      payable: undefined,
      signature: '0xd81ef739'
    }
  ]

  export default new web3.eth.Contract(abi, address);