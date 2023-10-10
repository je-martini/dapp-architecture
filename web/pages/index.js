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

        const accounts = await ethereum.request({ method: "eth_accounts"}); 

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        if(accounts.length != 0 ){
            setWalletAccount(accounts[0]);
        } else {
            console.log('no authorized account');
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
            {(!walletAccount) && (
                <div>
                    <button onClick={connectMetamask}>
                        Connect Meta Mask
                    </button>
                </div>
            )}
            {(walletAccount) && (
                <div>
                    <Navbar />

                    <h1>holaaa</h1>
                </div>
            )}
            
        </div>
    );
};

export default Home;