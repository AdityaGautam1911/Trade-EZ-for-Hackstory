import React, { useEffect, useState } from 'react'
import style from '../styles/Content.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { ethers } from 'ethers';
import Web3 from 'web3';

export default function content() {
    
    let [account, setAccount] = useState("");
    let [contractData, setContractData] = useState("");
    let [userBalance, setUserBalance] = useState(null);

    const connectMetamask = async () => {
        if (window.ethereum !== "undefined") {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
        }
    }

    const accountChangedHandler = (newAccount) => {
        setAccount(newAccount);
        getUserBalance(newAccount);
    }
    const getUserBalance = async (accountAddress) => {
        const web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
        web3.eth.getBalance(`${accounts[0]}`).then(res=>setUserBalance(ethers.utils.formatEther(res)));
    }

    useEffect(() => {
        connectMetamask();
    }, [])
    return (
        <div className={style.main} >

            <div className={style.topbar}>
                {account ? <>
                    <div className={style.username}>{account}</div>
                    <div className={style.userpic}><Image src='/user.png' width={60} height={60} /></div>
                </> : <button className={style.Metamask} onClick={connectMetamask}>Connect to MetaMask</button>}
            </div>
            <div className={style.heading}>Hey there! </div>
            <div className={style.wrapper}>
                <div className={style.overview}>
                    <h1 className={style.h1}>Overview</h1>
                    <div className={style.card} >
                        {userBalance ?
                            <>
                                <div className={style.balance}>Balance</div>
                                <div className={style.value}>{userBalance}</div>
                            </> : 
                            <button className={style.getBalance} onClick={getUserBalance}>Get Balance</button>
                            }
                    </div>
                </div>
                <div className={style.animation}>

                </div>
                

            </div>
        </div>
    )
}
