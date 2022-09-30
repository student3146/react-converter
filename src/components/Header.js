// import { useEffect, useState } from "react";
// import axios from "axios";
import '../components/Header.css'
import useFetch from "../hooks/useFetch";


export default function Header (props){

    const {dollarData, euroData}  = useFetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

    
    // const [curData, setCurData] = useState({})

    // useEffect(() => {
    //   fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCurData({
    //       dollarData: data[0].buy,
    //       euroData: data[1].buy,
    //     })
    //   })
      
    // }, [setCurData])
    
    
    // useEffect(() => {
    //     const apiUrl =
    //       "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    //     axios.get(apiUrl).then((resp) => {
    //       setCurData({
    //         dollarData: resp.data[0].buy,
    //         euroData: resp.data[1].buy,
    //       });
    //     });
    //   }, [setCurData]);




    return(
        <div className="Header">
            <h1>Converter</h1>
            <h2>
                <span>$ {(dollarData * 100) / 100} </span>
                <span>€ {(euroData * 100) / 100} </span>
            </h2>
        </div>
    )
}