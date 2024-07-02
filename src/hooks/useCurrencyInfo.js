import { useEffect,useState } from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    //what we want is we need to call hook when someone uses this
    //so we use useEffect hook
    useEffect(()=>{
        //fetch the data from the api
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        console.log('Api Called to ',currency);
        fetch(url)
        .then(response => response.json())
        .then((res)=> setData(res[currency]));
    },[currency]);
    return data;
}

export default useCurrencyInfo;