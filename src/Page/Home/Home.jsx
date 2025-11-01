import React, { useEffect, useState } from 'react';
import Card from './HomeComponents/Card';
import Banner from './HomeComponents/Banner';
import SecondBanner from './HomeComponents/SecondBanner';
import BannerCounters from './HomeComponents/SuccessBanner';
import ThirdBanner from './HomeComponents/ThirdBanner';
import FourthBanner from './HomeComponents/FourthBanner';
import SecondCart from './HomeComponents/SecondCart';

const Home = () => {
    const [carts,setCarts] = useState([]);
    useEffect(()=>{
        fetch("Card.json")
        .then(res=> res.json())
        .then(data=>setCarts(data)
        )
    },[])
    const [secoundCarts,setSecondCarts] = useState([])
useEffect(()=>{
    fetch("Short-card.json")
    .then(res => res.json())
    .then(data=> setSecondCarts(data))
},[])
    return (
        <div>
            <Banner></Banner>
            <Card carts={carts}></Card>
            <SecondBanner></SecondBanner>
            <BannerCounters></BannerCounters>
            <ThirdBanner></ThirdBanner>
            <FourthBanner></FourthBanner>
            <SecondCart secoundCarts={secoundCarts}></SecondCart>
        </div>
    );
};

export default Home;