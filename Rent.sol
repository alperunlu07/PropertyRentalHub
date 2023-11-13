// SPDX-License-Identifier: MIT 
pragma solidity >=0.8.2 <0.9.0; 

contract Rent {

    enum PropertyType { House, Shop } 

    struct Property { 
        uint id;
        address owner;
        address tenant;
        uint propertyType;
        string propertyAddress; 
    }

    struct RentContract {
        uint id;
        address owner;
        address tenant;
        uint256 rentStartDate;
        uint256 rentEndDate;
        uint256 rentAmount;
        uint propertyId;
    }
    
    struct Report{
        uint id;
        address tenant;
        uint contractId;
        uint propertyId;
        string message;
    }
    
    struct Person {
        string name;
        address addres;
    }
    
    Person[] public homeOwners;
    Person[] public tenants;

    // Mapping to associate addresses with their owned properties
    mapping(address => Property[]) public ownerProperties;
    mapping(address => RentContract[]) public rentContracts;
    mapping(uint => Report[]) public reports;

    uint256 propertiesCount = 0;
    uint256 rentContractsCount = 0;
    uint256 reportsCount = 0;

    constructor() { 
    }
    // check address record is exist at homeOwner list
    function isHomeOwner(address _addres) public view returns (bool) {
        for (uint i = 0; i < homeOwners.length; i++) {
            if (homeOwners[i].addres == _addres) {
                return true;
            }
        }
        return false;
    }
    // check address record is exist at tanent list
    function isTenants(address _addres) public view returns (bool) {
        for (uint i = 0; i < tenants.length; i++) {
            if (tenants[i].addres == _addres) {
                return true;
            }
        }
        return false;
    }
    // for audit only owners
    modifier onlyOwner() {
        require(isHomeOwner(msg.sender), "Only the owner can call this function.");
        _;
    }
    // for audit only tenant
    modifier onlyTenant() {
        require(isTenants(msg.sender), "Only the tenant can call this function.");
        _;
    }
    // Add new home owner to list
    function addHomeOwner(Person memory _person) public { 
        homeOwners.push(_person);
    }
    // Add new tenant person 
    function addTenant(Person memory _person) public { 
        tenants.push(_person);
    }
    
    // Function to add a property to an owner
    function addPropertyToOwner(Property memory _property) public onlyOwner {
        _property.id = propertiesCount;
        propertiesCount++;
        ownerProperties[msg.sender].push(_property);
    }

    // Function to get the properties owned by an address
    function getPropertiesByOwner() public view returns (Property[] memory) {
        return ownerProperties[msg.sender];
    }
    //for check is recorded saved succesfully 
    function getAllHomeOwners() public view returns (Person[] memory) {
        return homeOwners;
    }
    // Start Rent property function
    function startRentProperty(RentContract memory _rentContract) public onlyOwner 
    {
        _rentContract.id = rentContractsCount;
        rentContractsCount++;
        rentContracts[msg.sender].push(_rentContract);
    }
    // Get all property contract with owner address 
    function getRentProperty() public view onlyOwner returns(RentContract[] memory)
    {
        return rentContracts[msg.sender];
    }
    //Terminate rent proprty 
    function stopRentProperty(uint _contractId) public onlyOwner {
        RentContract[] storage ownerRentContracts = rentContracts[msg.sender];
        for (uint i = 0; i < ownerRentContracts.length; i++) {
            if (ownerRentContracts[i].id == _contractId) {
                // Remove the contract at index i
                ownerRentContracts[i] = ownerRentContracts[ownerRentContracts.length - 1];
                ownerRentContracts.pop();
                break;
            }
        }
    }  
    // Tenant send report related with property
    function sendPropertyReport(Report memory _report) public onlyTenant 
    {
        _report.id = reportsCount;
        reportsCount++;
        reports[_report.propertyId].push(_report);
    }
    // Get proprty Report with porpoerty Id
    function getPropertyReport(uint PropertyId) public view onlyTenant returns(Report[] memory)
    {
        return reports[PropertyId];
    } 
}

//["alper",0x5B38Da6a701c568545dCfcB03FcB875f56beddC4]
//["ahmet",0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2]
//[0,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0,"Ankara"]
//[0,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0,"Istanbul"]
//[0,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,1696491157,1728102757,1000,0]
//[0,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0,0,"broken doors"]
//0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2