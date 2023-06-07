import React from "react";
import Link from "next/link";
import style from "../styles/Sidenav.module.css"
import Image from "next/image";

export default function Sidenav() {
    return (
        <div className={style.container}>
            <Image alt='/' className={style.logo}src="/logo.jpg" width={150} height={150} />
            <ul className={style.links}>
                <li className={style.link}><Link href="/dashboard">Home</Link></li>
                <li className={style.link}><Link href="/prices">Analytics</Link></li>
                <li className={style.link}><Link href="/wallet">Wallet</Link></li>
                <li className={style.link}><Link href="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}