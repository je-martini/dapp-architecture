import Navbar from '../components/navbar/navbar';
import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import { abi_cryptomenu_address } from '../config';
import menu from '../utils/abi/menu.json';

 

const About = () => {

    const connectMetamask = async () => {
        const {ethereum } = window;

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        console.log(accounts[0]);
    }
    return (
        <div>
            <Navbar />
            <p>My dishes</p>
        </div>
    );
};

export default About;