import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar/navbar';
import {ethers} from 'ethers';
import { abi_cryptomenu_address } from '../config';
import menu from '../utils/abi/menu.json';



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

    const [dishes, setDishes] = useState([]);

    const getAllDishes = async () => {
        const provider = new ethers.providers.JsonRpcProvider(
            process.env.STAGING_ALCHEMY_KEY 
        );
        const contract = new ethers.Contract(
            abi_cryptomenu_address,
            menu.abi,
            provider
        );

        const dishes = await contract.get_all_foods();
        console.log(dishes[0][0]);

        setDishes(dishes);
    };

    useEffect(() => {
        getAllDishes();
    }, [])

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

                    {dishes.map((food, i) => (
                        <div key={i}>
                            <img style={{height: '20rem'}} src={food.food_url} />
                            <div>
                                <p style={{height: '64px'}}>
                                    {food.name}
                                </p>
                                <div style={{height: '70px', overflow: 'hidden'}}>
                                    <p>{dishes.name}</p>
                                    <p>{food.country}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    );
};

export default Home;