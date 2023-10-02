const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("crypto_menu", function () {
  it("Add a new dish", async function () {

    const [owner, addr1] = await ethers.getSigners();
    
    const Crypto_menu = await ethers.getContractFactory("menu");
    const crypto_menu = await Crypto_menu.deploy();
    // await crypto_menu.deployed();
    
    var addFood = await crypto_menu.add_food(
      "https",
      "gallo pinto",
      "costa rica"
    );

    await addFood.wait();

    var addFood2 = await crypto_menu.connect(addr1).add_food(
      "https-google",
      "pavellon",
      "venezuela"
    );

    await addFood2.wait();

    var foods = await crypto_menu.get_all_foods();
    expect(foods.length).to.equal(2);

    var foods_by_owner = await crypto_menu.get_food_by_owner();
    expect(foods_by_owner.length).to.equal(1);
  })
})