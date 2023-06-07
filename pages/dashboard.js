import Sidenav from '@/Components/sidenav'
import Content from '@/Components/content'
import React from 'react'
import style from '../styles/Dashboard.module.css'

export default function dashboard() {
    return (
        <div className={style.container}>
            <Sidenav />
            <Content />
        </div>
    )
}
