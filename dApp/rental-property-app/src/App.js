import { useState, useEffect } from 'react';
// import { ethers } from "ethers";
import Rent from './contracts/Rent.json'; // Replace with your contract JSON file
const { ethers } = require("ethers");

function App() {

  let [name, setName] = useState('');
  let [address, setAddress] = useState('');
  let [propertyType, setPropertyType] = useState(0); // Default property type, you may change it based on your needs

  let [contract, setContract] = useState(null);
  let [properties, setProperties] = useState([]);
  let [homeOwners, setHomeOwners] = useState([]);
  let [rentContracts, setRentContracts] = useState([]);
  let [propertyReports, setPropertyReports] = useState([]);


  let tokenContract = null;
  let signer = null;

  const contractAbi = Rent.abi;
  const contractAddress = '0x00000000';

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const rentalPropertyContract = new ethers.Contract(contractAddress, contractAbi, signer);
    setContract(rentalPropertyContract);
  }, [contractAddress, contractAbi]);

  async function handleAddHomeOwner() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      await contract.addHomeOwner(name, address);

      console.log('Home owner added successfully');
    } catch (error) {
      console.error('Error adding home owner:', error);
    }
  }

  // Function to call addTenant
  async function handleAddTenant() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      await contract.addTenant(name, address);

      console.log('Tenant added successfully');
    } catch (error) {
      console.error('Error adding tenant:', error);
    }
  }

  // Function to call addPropertyToOwner
  async function handleAddPropertyToOwner() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      await contract.addPropertyToOwner(0, address, address, propertyType, 'Sample Address');

      console.log('Property added to owner successfully');
    } catch (error) {
      console.error('Error adding property to owner:', error);
    }
  }

  // Function to call getPropertiesByOwner
  async function handleGetPropertiesByOwner() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      const result = await contract.getPropertiesByOwner();

      setProperties(result);
      console.log('Properties by owner:', result);
    } catch (error) {
      console.error('Error getting properties by owner:', error);
    }
  }

  // Function to call getAllHomeOwners
  async function handleGetAllHomeOwners() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      const result = await contract.getAllHomeOwners();

      setHomeOwners(result);
      console.log('All home owners:', result);
    } catch (error) {
      console.error('Error getting all home owners:', error);
    }
  }

  // Function to call startRentProperty
  async function handleStartRentProperty() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      await contract.startRentProperty(0, address, address, Date.now(), Date.now() + 86400000, 100, 0);

      console.log('Rent property started successfully');
    } catch (error) {
      console.error('Error starting rent property:', error);
    }
  }

  // Function to call getRentProperty
  async function handleGetRentProperty() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      const result = await contract.getRentProperty();

      setRentContracts(result);
      console.log('Rent contracts:', result);
    } catch (error) {
      console.error('Error getting rent contracts:', error);
    }
  }

  // Function to call stopRentProperty
  async function handleStopRentProperty(contractId) {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      await contract.stopRentProperty(contractId);

      console.log('Rent property stopped successfully');
    } catch (error) {
      console.error('Error stopping rent property:', error);
    }
  }

  // Function to call sendPropertyReport
  async function handleSendPropertyReport() {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      await contract.sendPropertyReport(0, address, 0, 0, 'Sample report message');

      console.log('Property report sent successfully');
    } catch (error) {
      console.error('Error sending property report:', error);
    }
  }

  // Function to call getPropertyReport
  async function handleGetPropertyReport(propertyId) {
    try {
      if (!contract) {
        console.error('Contract not instantiated');
        return;
      }

      const result = await contract.getPropertyReport(propertyId);

      setPropertyReports(result);
      console.log('Property reports:', result);
    } catch (error) {
      console.error('Error getting property reports:', error);
    }
  }

  return (
    <div>
      {/* Add Home Owner Form */}
      <h2>Add Home Owner</h2>
      <form onSubmit={handleAddHomeOwner}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit">Add Home Owner</button>
      </form>

      {/* Add Tenant Form */}
      <h2>Add Tenant</h2>
      <form onSubmit={handleAddTenant}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit">Add Tenant</button>
      </form>

      {/* Get Properties by Owner Button */}
      <h2>Get Properties by Owner</h2>
      <button onClick={handleGetPropertiesByOwner}>Get Properties</button>

      {/* Display Properties */}
      <h3>Properties:</h3>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>{`ID: ${property.id}, Address: ${property.propertyAddress}`}</li>
        ))}
      </ul>

      {/* Get All Home Owners Button */}
      <h2>Get All Home Owners</h2>
      <button onClick={handleGetAllHomeOwners}>Get Home Owners</button>

      {/* Display Home Owners */}
      <h3>Home Owners:</h3>
      <ul>
        {homeOwners.map((owner, index) => (
          <li key={index}>{`Name: ${owner.name}, Address: ${owner.address}`}</li>
        ))}
      </ul>

      {/* Start Rent Property Form */}
      <h2>Start Rent Property</h2>
      <form onSubmit={handleStartRentProperty}>
        {/* Include necessary input fields for starting rent property */}
        <button type="submit">Start Rent Property</button>
      </form>

      {/* Get Rent Property Button */}
      <h2>Get Rent Property</h2>
      <button onClick={handleGetRentProperty}>Get Rent Property</button>

      {/* Display Rent Contracts */}
      <h3>Rent Contracts:</h3>
      <ul>
        {rentContracts.map((contract, index) => (
          <li key={index}>{`ID: ${contract.id}, Start Date: ${new Date(contract.rentStartDate * 1000).toLocaleString()}, End Date: ${new Date(contract.rentEndDate * 1000).toLocaleString()}`}</li>
        ))}
      </ul>

      {/* Stop Rent Property Form */}
      <h2>Stop Rent Property</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const contractId = prompt("Enter contract ID to stop rent:");
        handleStopRentProperty(contractId);
      }}>
        <button type="submit">Stop Rent Property</button>
      </form>

      {/* Send Property Report Form */}
      <h2>Send Property Report</h2>
      <form onSubmit={handleSendPropertyReport}>
        {/* Include necessary input fields for sending property report */}
        <button type="submit">Send Property Report</button>
      </form>

      {/* Get Property Report Button */}
      <h2>Get Property Report</h2>
      <button onClick={() => {
        const propertyId = prompt("Enter property ID to get reports:");
        handleGetPropertyReport(propertyId);
      }}>Get Property Report</button>

      {/* Display Property Reports */}
      <h3>Property Reports:</h3>
      <ul>
        {propertyReports.map((report, index) => (
          <li key={index}>{`ID: ${report.id}, Tenant: ${report.tenant}, Contract ID: ${report.contractId}, Message: ${report.message}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
