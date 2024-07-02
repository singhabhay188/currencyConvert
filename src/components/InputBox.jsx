import React from "react";

function InputBox({label,
    currencyOption=[],
    selectCurrency="inr",
    amount,
    onAmountChange,
    isAmountDisabled=false,
    onCurrencyChange,
}){
    return (
        <div className="bg-white p-3 pb-6 rounded-lg text-sm flex w-full">
            <div className="w-1/2">
                <label className="text-black font-bold mb-2 inline-block">{label}</label>
                <input className={`outline-none border-[2px] border-gray-200 focus:border-black p-2 rounded-lg w-full bg-transparent py-1.5 ${isAmountDisabled ? 'cursor-not-allowed' : 'cursor-text'}`} 
                    placeholder="Amount" 
                    type="number"
                    value={amount}
                    onChange={(e)=>onAmountChange(e.target.value)}
                    disabled={isAmountDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full font-bold">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                    value={selectCurrency} 
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                    >
                    {currencyOption.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;