// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract menu{
    constructor(){}

    struct menu_items {
        address owner;
        string food_url;
        string name;
        string country;
    }

    menu_items[] private food_menu;

    function add_food(
        string memory food_url,
        string memory name,
        string memory country
    ) public {
        food_menu.push(
            menu_items(msg.sender, food_url, name, country)
        );
    }

    function get_all_foods() public view returns (menu_items[] memory){
        return food_menu;
    }

    function get_food_by_owner() public view returns(menu_items[] memory){
        uint256 item_count= 0;

        for(uint256 i = 0; i < food_menu.length; i++){
            if(food_menu[i].owner == msg.sender){
                item_count++;
            }
        }

        menu_items[] memory my_foods = new menu_items[](item_count);
        for(uint256 i = 0; i < food_menu.length; i ++){
            if(food_menu[i].owner == msg.sender){
                my_foods[i] = food_menu[i];
            }
        }

        return my_foods;
    }
}