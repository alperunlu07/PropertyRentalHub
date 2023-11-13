// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Rent {
    enum PropertyType {
        House,
        Shop
    }

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

    struct Report {
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

    constructor() {}

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
        require(
            isHomeOwner(msg.sender),
            "Only the owner can call this function."
        );
        _;
    }
    // for audit only tenant
    modifier onlyTenant() {
        require(
            isTenants(msg.sender),
            "Only the tenant can call this function."
        );
        _;
    }

    function addHomeOwner(string memory name, address addres) public {
        Person memory _person;
        _person.addres = addres;
        _person.name = name;
        homeOwners.push(_person);
    }

    // Add new tenant person
    function addTenant(string memory name, address addres) public {
        Person memory _person;
        _person.addres = addres;
        _person.name = name;
        tenants.push(_person);
    }

    // Function to add a property to an owner
    function addPropertyToOwner(
        uint id,
        address owner,
        address tenant,
        uint propertyType,
        string memory propertyAddress
    ) public onlyOwner {
        Property memory _property;
        _property.id = propertiesCount;
        _property.owner = owner;
        _property.tenant = tenant;
        _property.propertyType = propertyType;
        _property.propertyAddress = propertyAddress;

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
    function startRentProperty(
        uint id,
        address owner,
        address tenant,
        uint256 rentStartDate,
        uint256 rentEndDate,
        uint256 rentAmount,
        uint propertyId
    ) public onlyOwner {
        RentContract memory _rentContract;
        _rentContract.id = rentContractsCount;
        _rentContract.owner = owner;
        _rentContract.tenant = tenant;
        _rentContract.rentStartDate = rentStartDate;
        _rentContract.rentEndDate = rentEndDate;
        _rentContract.rentAmount = rentAmount;
        _rentContract.propertyId = propertyId;
        rentContractsCount++;
        rentContracts[msg.sender].push(_rentContract);
    }

    // Get all property contract with owner address
    function getRentProperty()
        public
        view
        onlyOwner
        returns (RentContract[] memory)
    {
        return rentContracts[msg.sender];
    }

    //Terminate rent proprty
    function stopRentProperty(uint _contractId) public onlyOwner {
        RentContract[] storage ownerRentContracts = rentContracts[msg.sender];
        for (uint i = 0; i < ownerRentContracts.length; i++) {
            if (ownerRentContracts[i].id == _contractId) {
                // Remove the contract at index i
                ownerRentContracts[i] = ownerRentContracts[
                    ownerRentContracts.length - 1
                ];
                ownerRentContracts.pop();
                break;
            }
        }
    }

    // Tenant send report related with property
    function sendPropertyReport(
        uint id,
        address tenant,
        uint contractId,
        uint propertyId,
        string memory message
    ) public onlyTenant {
        Report memory _report;
        _report.id = reportsCount;
        _report.tenant = tenant;
        _report.contractId = contractId;
        _report.propertyId = propertyId;
        _report.message = message;
        reportsCount++;
        reports[_report.propertyId].push(_report);
    }

    // Get proprty Report with porpoerty Id
    function getPropertyReport(
        uint PropertyId
    ) public view onlyTenant returns (Report[] memory) {
        return reports[PropertyId];
    }
}
