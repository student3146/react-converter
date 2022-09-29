import { useEffect, useState } from "react";
import axios from "axios";
import './Header.css'


export default function Header (props){

    const [curData, setCurData] = useState({});

    useEffect(() => {
        const apiUrl =
          "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
        axios.get(apiUrl).then((resp) => {
          setCurData({
            dollarData: resp.data[0].buy,
            euroData: resp.data[1].buy,
          });
        });
      }, [setCurData]);

    return(
        <div className="Header">
            <h1>Converter</h1>
            <h2>
                <span>$ {curData.dollarData} </span>
                <span>€ {curData.euroData}</span>
            </h2>
        </div>
    )
}