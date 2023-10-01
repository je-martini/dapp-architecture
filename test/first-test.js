const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("crypto_menu", function () {
  it("Add a new dish", async function () {

    const [owner, addr1] = await ethers.getSigners();
    
    const Menu = await ethers.getContractFactory("menu");
    const menu = await Menu.deploy();
    await menu.deployed();
    
    var addFood = await menu.add_food(
      "https",
      "gallo pinto",
      "costa rica"
    );

    await addFood.wait();

    var addFood2 = await menu.connect(addr1).add_food(
      "https-google",
      "pavellon",
      "venezuela"
    );

    await addFood2.wait();

    var foods = await menu.get_all_foods();
    expect(foods.length).to.equal(2);
  })
})