import React, {useEffect, useState} from "react";   
import { ethers } from "ethers";
import { useRouter} from 'next/router';
import { abi_cryptomenu_address } from '../config';

import Navbar from '../components/navbar/navbar';
 
import menu from '../utils/abi/menu.json';

// const add_dish = async () => {

// }
export default function AddDish(){
    const router = useRouter();
    const [formInput, updateFormInput] = useState({
        fileUrl: "",
        name: "",
        originCountry: "",
    });

    const AddDish1 = async () => {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(abi_cryptomenu_address, menu.abi, signer);
            const transaction = await contract.add_food(formInput.fileUrl, formInput.name,formInput.originCountry);
            transaction.wait();
            router.push('/');
        }
    }
    return(
        <div>
            <div>
                <Navbar />
                <input
                    placeholder=" url foos"
                    onChange={(e) => 
                    updateFormInput({ ...formInput, fileUrl: e.target.value })
                }
                />
                <input
                    placeholder="Food Name"
                    onChange={(e) => 
                    updateFormInput({ ...formInput, name: e.target.value })
                }
                />
                <input
                    placeholder="Origin Country"
                    onChange={(e) => 
                    updateFormInput({ ...formInput, originCountry: e.target.value })
                }
                />
                <button
                    onClick={AddDish1}>
                        Add Food
                </button>
            </div>
        </div>
    )
}
