import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useState } from 'react';

function App() {
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const [amount,setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0);

  //fetch the currencyInfo for the selected currency
  const currencyInfo = useCurrencyInfo(from);
  //extract the options from the currencyInfo
  const options = Object.keys(currencyInfo);


  const swap = ()=>{
    //swap the from and to currency and also swap amount
    let temp = from;
    setFrom(to);
    setTo(temp);
    temp = amount;
    setAmount(convertedAmount);
    setConvertedAmount(temp);
  }

  const convert = ()=>{
    //convert the amount from from currency to to currency
    let ca = Number(amount || 0) * currencyInfo[to];
    //round to 5 digits
    ca = Math.round(ca * 100000) / 100000;
    setConvertedAmount(ca);
  }
  

  return(
    <div className='flex flex-col gap-4 max-w-[600px] backdrop-blur-sm backdrop-filter backdrop-brightness-75 p-12 rounded-2xl bg-white bg-opacity-50'>
      <div className='relative'>
        <InputBox label="From" currencyOption={options} selectCurrency={from} amount={amount} onAmountChange={setAmount} onCurrencyChange={setFrom}/>
        <button className='p-2 px-3 rounded-lg my-4 bg-white w-max mx-auto absolute z-4 -bottom-1/2 left-1/2 -translate-x-1/2 bg-[#1d51cd] text-white' onClick={swap}>Swap</button>
      </div>
      <InputBox label="To" currencyOption={options} selectCurrency={to} amount={convertedAmount} onAmountChange={setConvertedAmount} isAmountDisabled={true} onCurrencyChange={setTo}/>
      <button className='p-2 rounded-lg bg-[#1d51cd] text-white text-2xl' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </div>
  )
}

export default App
