/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Rent, RentInterface } from "../Rent";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "addres",
            type: "address",
          },
        ],
        internalType: "struct Rent.Person",
        name: "_person",
        type: "tuple",
      },
    ],
    name: "addHomeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tenant",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "propertyType",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "propertyAddress",
            type: "string",
          },
        ],
        internalType: "struct Rent.Property",
        name: "_property",
        type: "tuple",
      },
    ],
    name: "addPropertyToOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "addres",
            type: "address",
          },
        ],
        internalType: "struct Rent.Person",
        name: "_person",
        type: "tuple",
      },
    ],
    name: "addTenant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllHomeOwners",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "addres",
            type: "address",
          },
        ],
        internalType: "struct Rent.Person[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPropertiesByOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tenant",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "propertyType",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "propertyAddress",
            type: "string",
          },
        ],
        internalType: "struct Rent.Property[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "PropertyId",
        type: "uint256",
      },
    ],
    name: "getPropertyReport",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tenant",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "contractId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "propertyId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct Rent.Report[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRentProperty",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tenant",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "rentStartDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentEndDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "propertyId",
            type: "uint256",
          },
        ],
        internalType: "struct Rent.RentContract[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "homeOwners",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "addres",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addres",
        type: "address",
      },
    ],
    name: "isHomeOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addres",
        type: "address",
      },
    ],
    name: "isTenants",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ownerProperties",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "tenant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "propertyType",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "propertyAddress",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rentContracts",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "tenant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rentStartDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rentEndDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "propertyId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "reports",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tenant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "contractId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "propertyId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tenant",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "contractId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "propertyId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct Rent.Report",
        name: "_report",
        type: "tuple",
      },
    ],
    name: "sendPropertyReport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "tenant",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "rentStartDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentEndDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "propertyId",
            type: "uint256",
          },
        ],
        internalType: "struct Rent.RentContract",
        name: "_rentContract",
        type: "tuple",
      },
    ],
    name: "startRentProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
    ],
    name: "stopRentProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tenants",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "addres",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006005556000600655600060075534801561001f57600080fd5b506119938061002f6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063a3ae1dae116100b2578063bbbef86d11610081578063c60657cc11610066578063c60657cc146102ba578063d716526c146102cf578063fc43c233146102e257600080fd5b8063bbbef86d14610294578063bd2ba85d146102a757600080fd5b8063a3ae1dae14610246578063a584b0761461025b578063ac8b7bf91461026e578063b510fa3e1461028157600080fd5b8063870dde16116100ee578063870dde16146101a65780638f48bd5b146101bb57806392483819146101df57806397c4cf1f146101f257600080fd5b80630af93b2c146101205780631eba13c11461014a5780632d283db51461015f5780634a4ad2e814610183575b600080fd5b61013361012e3660046110d7565b610302565b604051610141929190611136565b60405180910390f35b6101526103c7565b6040516101419190611161565b61017261016d366004611202565b6104fd565b604051610141959493929190611224565b61019661019136600461127a565b6105e3565b6040519015158152602001610141565b6101b96101b4366004611368565b610654565b005b6101ce6101c936600461140b565b610762565b604051610141959493929190611435565b6101b96101ed3660046110d7565b6107c5565b61020561020036600461140b565b6109a3565b604080519788526001600160a01b03968716602089015294909516938601939093526060850191909152608084015260a083015260c082015260e001610141565b61024e610a0a565b604051610141919061146d565b6101b96102693660046114fb565b610b18565b6101b961027c3660046114fb565b610b88565b6101b961028f36600461158f565b610bcd565b6101966102a236600461127a565b610cc4565b6101336102b53660046110d7565b610d2c565b6102c2610d3c565b6040516101419190611610565b6101b96102dd366004611681565b610e37565b6102f56102f03660046110d7565b610f42565b6040516101419190611711565b6000818154811061031257600080fd5b9060005260206000209060020201600091509050806000018054610335906117a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610361906117a1565b80156103ae5780601f10610383576101008083540402835291602001916103ae565b820191906000526020600020905b81548152906001019060200180831161039157829003601f168201915b505050600190930154919250506001600160a01b031682565b336000908152600260209081526040808320805482518185028101850190935280835260609492939192909184015b828210156104f45760008481526020908190206040805160a081018252600586029092018054835260018101546001600160a01b039081169484019490945260028101549093169082015260038201546060820152600482018054919291608084019190610463906117a1565b80601f016020809104026020016040519081016040528092919081815260200182805461048f906117a1565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b505050505081525050815260200190600101906103f6565b50505050905090565b6004602052816000526040600020818154811061051957600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004850180549497506001600160a01b03909316955090939092909190610560906117a1565b80601f016020809104026020016040519081016040528092919081815260200182805461058c906117a1565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b5050505050905085565b6000805b60005481101561064b57826001600160a01b03166000828154811061060e5761060e6117db565b60009182526020909120600160029092020101546001600160a01b0316036106395750600192915050565b8061064381611807565b9150506105e7565b50600092915050565b61065d336105e3565b6106bd5760405162461bcd60e51b815260206004820152602660248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526531ba34b7b71760d11b60648201526084015b60405180910390fd5b600580548083529060006106d083611807565b90915550503360009081526002602081815260408084208054600181810183559186529483902086516005909602019485559185015191840180546001600160a01b039384166001600160a01b031991821617909155908501519284018054939092169216919091179055606082015160038201556080820151829190600482019061075c908261186e565b50505050565b6002602052816000526040600020818154811061077e57600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004850180549497506001600160a01b03938416965091909216939192610560906117a1565b6107ce336105e3565b6108295760405162461bcd60e51b815260206004820152602660248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526531ba34b7b71760d11b60648201526084016106b4565b336000908152600360205260408120905b815481101561099e5782828281548110610856576108566117db565b9060005260206000209060070201600001540361098c578154829061087d9060019061192e565b8154811061088d5761088d6117db565b90600052602060002090600702018282815481106108ad576108ad6117db565b60009182526020909120825460079092020190815560018083015490820180546001600160a01b039283166001600160a01b0319918216179091556002808501549084018054919093169116179055600380830154908201556004808301549082015560058083015490820155600691820154910155815482908061093457610934611947565b6000828152602081206007600019909301928302018181556001810180546001600160a01b03199081169091556002820180549091169055600381018290556004810182905560058101829055600601559055505050565b8061099681611807565b91505061083a565b505050565b600360205281600052604060002081815481106109bf57600080fd5b600091825260209091206007909102018054600182015460028301546003840154600485015460058601546006909601549497506001600160a01b0393841696509290911693909287565b6060610a15336105e3565b610a705760405162461bcd60e51b815260206004820152602660248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526531ba34b7b71760d11b60648201526084016106b4565b33600090815260036020908152604080832080548251818502810185019093528083529193909284015b828210156104f45760008481526020908190206040805160e08101825260078602909201805483526001808201546001600160a01b0390811685870152600283015416928401929092526003810154606084015260048101546080840152600581015460a08401526006015460c08301529083529092019101610a9a565b60008054600181018255908052815182916002027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301908190610b5b908261186e565b5060209190910151600190910180546001600160a01b0319166001600160a01b0390921691909117905550565b600180548082018255600091909152815182916002027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601908190610b5b908261186e565b610bd633610cc4565b610c325760405162461bcd60e51b815260206004820152602760248201527f4f6e6c79207468652074656e616e742063616e2063616c6c20746869732066756044820152663731ba34b7b71760c91b60648201526084016106b4565b60078054808352906000610c4583611807565b909155505060608101805160009081526004602081815260408084208054600180820183559186529483902087516005909602019485559186015191840180546001600160a01b0319166001600160a01b03909316929092179091558401516002830155915160038201556080830151839282019061075c908261186e565b6000805b60015481101561064b57826001600160a01b031660018281548110610cef57610cef6117db565b60009182526020909120600160029092020101546001600160a01b031603610d1a5750600192915050565b80610d2481611807565b915050610cc8565b6001818154811061031257600080fd5b60606000805480602002602001604051908101604052809291908181526020016000905b828210156104f45783829060005260206000209060020201604051806040016040529081600082018054610d93906117a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbf906117a1565b8015610e0c5780601f10610de157610100808354040283529160200191610e0c565b820191906000526020600020905b815481529060010190602001808311610def57829003601f168201915b50505091835250506001918201546001600160a01b0316602091820152918352929092019101610d60565b610e40336105e3565b610e9b5760405162461bcd60e51b815260206004820152602660248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526531ba34b7b71760d11b60648201526084016106b4565b60068054808352906000610eae83611807565b90915550503360009081526003602081815260408084208054600181810183559186529483902086516007909602019485559185015191840180546001600160a01b039384166001600160a01b031991821617909155908501516002850180549190931691161790556060830151908201556080820151600482015560a0820151600582015560c090910151600690910155565b6060610f4d33610cc4565b610fa95760405162461bcd60e51b815260206004820152602760248201527f4f6e6c79207468652074656e616e742063616e2063616c6c20746869732066756044820152663731ba34b7b71760c91b60648201526084016106b4565b600082815260046020908152604080832080548251818502810185019093528083529193909284015b828210156110cb5760008481526020908190206040805160a081018252600586029092018054835260018101546001600160a01b0316938301939093526002830154908201526003820154606082015260048201805491929160808401919061103a906117a1565b80601f0160208091040260200160405190810160405280929190818152602001828054611066906117a1565b80156110b35780601f10611088576101008083540402835291602001916110b3565b820191906000526020600020905b81548152906001019060200180831161109657829003601f168201915b50505050508152505081526020019060010190610fd2565b5050505090505b919050565b6000602082840312156110e957600080fd5b5035919050565b6000815180845260005b81811015611116576020818501810151868301820152016110fa565b506000602082860101526020601f19601f83011685010191505092915050565b60408152600061114960408301856110f0565b90506001600160a01b03831660208301529392505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156111f457888303603f19018552815180518452878101516001600160a01b03908116898601528782015116878501526060808201519085015260809081015160a0918501829052906111e0818601836110f0565b968901969450505090860190600101611188565b509098975050505050505050565b6000806040838503121561121557600080fd5b50508035926020909101359150565b8581526001600160a01b038516602082015283604082015282606082015260a06080820152600061125860a08301846110f0565b979650505050505050565b80356001600160a01b03811681146110d257600080fd5b60006020828403121561128c57600080fd5b61129582611263565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156112d5576112d561129c565b60405290565b600082601f8301126112ec57600080fd5b813567ffffffffffffffff808211156113075761130761129c565b604051601f8301601f19908116603f0116810190828211818310171561132f5761132f61129c565b8160405283815286602085880101111561134857600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561137a57600080fd5b813567ffffffffffffffff8082111561139257600080fd5b9083019060a082860312156113a657600080fd5b6113ae6112b2565b823581526113be60208401611263565b60208201526113cf60408401611263565b6040820152606083013560608201526080830135828111156113f057600080fd5b6113fc878286016112db565b60808301525095945050505050565b6000806040838503121561141e57600080fd5b61142783611263565b946020939093013593505050565b85815260006001600160a01b03808716602084015280861660408401525083606083015260a0608083015261125860a08301846110f0565b602080825282518282018190526000919060409081850190868401855b828110156114ee57815180518552868101516001600160a01b0390811688870152868201511686860152606080820151908601526080808201519086015260a0808201519086015260c0908101519085015260e0909301929085019060010161148a565b5091979650505050505050565b60006020828403121561150d57600080fd5b813567ffffffffffffffff8082111561152557600080fd5b908301906040828603121561153957600080fd5b6040516040810181811083821117156115545761155461129c565b60405282358281111561156657600080fd5b611572878286016112db565b82525061158160208401611263565b602082015295945050505050565b6000602082840312156115a157600080fd5b813567ffffffffffffffff808211156115b957600080fd5b9083019060a082860312156115cd57600080fd5b6115d56112b2565b823581526115e560208401611263565b602082015260408301356040820152606083013560608201526080830135828111156113f057600080fd5b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156111f457888303603f190185528151805187855261165b888601826110f0565b918901516001600160a01b03169489019490945294870194925090860190600101611637565b600060e0828403121561169357600080fd5b60405160e0810181811067ffffffffffffffff821117156116b6576116b661129c565b604052823581526116c960208401611263565b60208201526116da60408401611263565b6040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201528091505092915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156111f457888303603f19018552815180518452878101516001600160a01b03168885015286810151878501526060808201519085015260809081015160a09185018290529061178d818601836110f0565b968901969450505090860190600101611738565b600181811c908216806117b557607f821691505b6020821081036117d557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611819576118196117f1565b5060010190565b601f82111561099e57600081815260208120601f850160051c810160208610156118475750805b601f850160051c820191505b8181101561186657828155600101611853565b505050505050565b815167ffffffffffffffff8111156118885761188861129c565b61189c8161189684546117a1565b84611820565b602080601f8311600181146118d157600084156118b95750858301515b600019600386901b1c1916600185901b178555611866565b600085815260208120601f198616915b82811015611900578886015182559484019460019091019084016118e1565b508582101561191e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81810381811115611941576119416117f1565b92915050565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220cc5642b1a78c56b602207cab35f5c46331bd8b554e5bf8970e47c46c4f59be4a64736f6c63430008130033";

type RentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rent__factory extends ContractFactory {
  constructor(...args: RentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Rent & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Rent__factory {
    return super.connect(runner) as Rent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RentInterface {
    return new Interface(_abi) as RentInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Rent {
    return new Contract(address, _abi, runner) as unknown as Rent;
  }
}
