import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import Header from './Header';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = useState('UAH')
  const [toCurrency, setToCurrency] = useState('UAH')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  const [rates, setRates] = useState({})

  useEffect(() => {
    fetch('https://cdn.cur.su/api/nbu.json')
    .then((res) => res.json())
    .then((json) => {
      setRates(json.rates);
      console.log(json.rates)
    })
    
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setFromPrice(value)
    setToPrice(result.toFixed(1))
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
        <div className='head'>
      <Header/>
      </div>

      <Block
       value={fromPrice}
       currency={fromCurrency} 
       onChangeCurrency={setFromCurrency} 
       onChangeValue={onChangeFromPrice}
       />

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
