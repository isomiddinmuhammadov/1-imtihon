import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import CardItem1 from '../../components/cards/card_item1/CardItem1'
import Footer from '../../components/footer/Footer'
import Carousell from '../../components/Carousel/Carousel'
import Footer_top from '../../components/footer_top/Footer_top'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from '../../static/bannerDataElektronik'
import MiniCarousel from '../../components/MiniCarousel/MiniCarousel'

function Home() {
    let electronic = data.filter(i => i.type === "Elektronika")
    let kiyim = data.filter(i => i.type === "Kiyim")
    return (
        <div className="home">
            <ToastContainer />
            <Header />
            <Carousell />
            <MiniCarousel/>
            <CardItem1 componentName={"ajoyip aksiyalar"} data={electronic} />
            <CardItem1 componentName={"sizni qiziqtirishi mumkin    "} data={electronic} />
            <CardItem1 componentName={"Elektronika"} data={electronic} />
            <CardItem1 componentName={"en arzon narliklar"} data={electronic} />
            <CardItem1 componentName={"faqat optom"} data={electronic} />
            <CardItem1 componentName={"dona mahsulotlar"} data={electronic} />
            <Footer_top/>
            <Footer />
        </div>
    );
}

export default Home
