import { useState, useEffect } from "react";
// import axios from "axios";

const useFetch = (url, options) => {
    const [status, setStatus] = useState({
        dollarData: undefined,
        euroData: undefined,
        rates: {},
        error: undefined 
    })
    
    

    function fetchNow (url, options) {
        
        
        fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setStatus({
          rates: data.rates,
        })
      })
        .catch((error) => {
            setStatus({error})
        });
      

    }


    useEffect(() => {
        if(url) {
            fetchNow(url, options)
        }
    }, [url, options] )

    return{
        ...status, fetchNow, 
    }
}

export default useFetch