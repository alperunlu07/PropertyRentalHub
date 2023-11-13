import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Rent } from "../typechain-types";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Rent descriptions", function () {
  let rent: Rent;

  beforeEach(async () => {
    let rentFactory = await ethers.getContractFactory("Rent");
    // rent = (await RentFactory.deploy()) as Rent;
    rent = await rentFactory.deploy();
    await rent.waitForDeployment();
  });

    describe("Deployment", () => {
      it("should add a homeowner", async function () {
        const tx = await rent.addHomeOwner({ name: "Alper", addres: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4" });
        await tx.wait();

        const isHomeOwner = await rent.isHomeOwner("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
        expect(isHomeOwner).to.be.true;
      });
      it("should add a tenant", async function () {
        const tx = await rent.addTenant({ name: "Ahmet", addres: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2" });
        await tx.wait();

        const isTenant = await rent.isTenants("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2");
        expect(isTenant).to.be.true;
      });
    });
});