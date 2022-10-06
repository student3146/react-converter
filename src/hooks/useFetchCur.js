import { useState, useEffect } from "react";
// import axios from "axios";

const useFetchCur = (url, options) => {
    const [status, setStatus] = useState({
        dollarData: undefined,
        euroData: undefined, 
    })
    
    

    function fetchNow (url, options) {
        
        
        fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setStatus({
          dollarData: data[0].buy,
          euroData: data[1].buy,
        })
      })

      

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

export default useFetchCur