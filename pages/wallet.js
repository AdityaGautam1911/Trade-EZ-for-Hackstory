import { useEffect, useState } from "react";
import style from "../styles/Wallet.module.css"
import { ethers } from 'ethers';
import Sidenav from "@/Components/sidenav";
import Image from "next/image";

function Wallet() {

    let [account, setAccount] = useState("");
    let [contractData, setContractData] = useState("");
    const connectMetamask = async () => {
        if (window.ethereum !== "undefined") {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
        }
    }
    let contract;
    const connectContract = async () => {
        const Address = "0x0EedEF83dd9522B6d64f0F35A2D4dEB755307291";
        const ABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "n",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fn",
                        "type": "uint256"
                    }
                ],
                "name": "addppl",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "name": "nameTofn",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "people",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "favnum",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "retrieve",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "favnum",
                        "type": "uint256"
                    }
                ],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        contract = new ethers.Contract(Address, ABI, signer);
        console.log(contract.address); 
    }
    const getData = async () => {
        const res = await contract.retrieve();
        console.log(res);
        return;
    }
    const changeData = async () => {
        return;
    }
    useEffect(()=>{
        connectMetamask();
    }, [])

    const clickHandler = e => {
        e.preventDefault();
    }
    return (
        <div className={style.wrapper}>
            <Sidenav />
            <div className={style.content}>
                <div className={style.topbar}>
                    {account ? <>
                        <div className={style.username}>{account}</div>
                        <div className={style.userpic}><Image src='/user.png' width={60} height={60} /></div>
                    </> : <button className={style.Metamask} onClick={connectMetamask}>Connect to MetaMask</button>}
                </div>
                {/* <div className={style.body}>
                    <button className={style.button} onClick={connectContract}>CONNECT TO CONTRACT</button>
                    <button className={style.button} onClick={changeData}>CHANGE DATA</button>
                    <button className={style.button} onClick={getData}>READ FROM CONTRACT</button>
                    <p>{contractData}</p>
                </div> */}
                <div className={style.payments}>
                    <input type="text" className={style.inputID} placeholder='Enter User ID' />
                    <input type="number" className={style.inputamount} placeholder='Enter Amount' />
                    <button onClick={clickHandler} className={style.pay}>Pay</button>
                </div>
            </div>
        </div>
    );
}
export default Wallet;