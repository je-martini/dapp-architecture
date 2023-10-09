import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar/navbar';
import {ethers} from 'ethers';

const Home = () => {

    const [walletAccount, setWalletAccount] = useState('');

    const checkIfMetaMaskIsConnected = async () => {
        const {ethereum} = window;

        if(!ethereum) {
            console.log("metamask need's to be install")
        } else {
            console.log("metamask is installed :)")
        }
    };

    useEffect(() => {
        checkIfMetaMaskIsConnected();
    }, []);

    const connectMetamask = async () => {
        try {
            const {ethereum } = window;

            if(!ethereum) {
                alert("get metamask");
                return;
            }

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        console.log(accounts[0]);
        setWalletAccount(accounts[0]);
    } catch (error) {
        console.log('Error', error);
    }
}

    return (
        <div>
            <Navbar />

            <h1>holaaa</h1>
        </div>
    );
};

export default Home;