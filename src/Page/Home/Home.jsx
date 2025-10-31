import React, { useEffect, useState } from 'react';
import Card from './HomeComponents/Card';
import Banner from './HomeComponents/Banner';
import SecondBanner from './HomeComponents/SecondBanner';
import BannerCounters from './HomeComponents/SuccessBanner';

const Home = () => {
    const [carts,setCarts] = useState([]);
    useEffect(()=>{
        fetch("Card.json")
        .then(res=> res.json())
        .then(data=>setCarts(data)
        )
    },[])
    return (
        <div>
            <Banner></Banner>
            <Card carts={carts}></Card>
            <SecondBanner></SecondBanner>
            <BannerCounters></BannerCounters>
        </div>
    );
};

export default Home;