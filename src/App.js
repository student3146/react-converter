import React, { useEffect, useState } from 'react';
import { Block } from './components/Block';
import Header from './components/Header';
import useFetch from './hooks/useFetch';
import './index.scss';

function App(props) {
  const [fromCurrency, setFromCurrency] = useState('UAH')
  const [toCurrency, setToCurrency] = useState('UAH')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)


  const { rates } = useFetch('https://cdn.cur.su/api/nbu.json')
  console.log(rates);

 


  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setFromPrice(value)
    setToPrice(result.toFixed(1))
    console.log(rates);
  }

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value
    setFromPrice(result.toFixed(1))
    setToPrice(value)
  }

  useEffect(() => {
    onChangeFromPrice(fromPrice)
  },[fromCurrency, fromPrice])

  useEffect(() => {
    onChangeToPrice(toPrice)
  },[toCurrency, toPrice])

  return (
    
    <div className="App">
       
       
      <Block
       value={fromPrice}
       currency={fromCurrency} 
       onChangeCurrency={setFromCurrency} 
       onChangeValue={onChangeFromPrice}
       />

      <div className='head'>
      <Header/>
      </div>

      <Block 
      value={toPrice} 
      currency={toCurrency} 
      onChangeCurrency={setToCurrency} 
      onChangeValue={onChangeToPrice}
      />

    </div>
   
  );
}

export default App;
