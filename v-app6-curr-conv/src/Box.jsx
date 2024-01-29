function Box({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencySelector='usd' ,
    currencyOptions = [],
}
) {

    console.log(label)

    return (
        <div className="bg-white p-5 rounded-lg text-sm flex border-4 border-black  m-auto ">
            <div className="w-1/2">
                <label  className="text-black inline-block text-lg mt-3">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent mt-10 border-2 border-black rounded-md p-2"
                    type="number"
                    placeholder="Amount"  
                    value={amount}
                   onChange={(e) => onAmountChange(Number(e.target.value))}         
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right p-5">
                <p className="text-black mb-12 w-full text-xl">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"  
                     value={currencySelector}
                     onChange={(e) => onCurrencyChange(e.target.value)}      

                >                   
                       {currencyOptions.map((currency) => (
                         <option key={currency} value={currency}>
                         {currency}
                     </option>
                       ))}

                </select>
            </div>
        </div>
    );
}

export default Box