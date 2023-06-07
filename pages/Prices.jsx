import React, { Fragment,useEffect,useState} from 'react';
import "../scss/App.scss";
import axios from "axios";

const Prices = () => {

    const [filteredData,setFilteredData]=useState([])

    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(async(res)=>{
            await setData(res.data)
            await setFilteredData(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const handleSearch=(e)=>{
        const exData=[...data];
        const newData=exData.filter((ex)=>{
            return ex.id.startsWith(e.toLowerCase());
        })
        setFilteredData(newData)
    }

    return (
        <Fragment>
            <div className='container-md text-white'>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <div className='result-box'>
                    {filteredData.map((element)=>(
                        <div className='result'>
                        <img src={element.image} alt="" />
                        <h4>{element.id}</h4>
                        <p>{element.current_price}</p>
                    </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Prices;