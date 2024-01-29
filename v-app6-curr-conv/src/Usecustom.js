import React, { useState, useEffect } from 'react';

function Usecustom( currency ) {
  console.log(currency)
  const [data, setCurr] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setCurr(res[currency]));
         
  }, [currency]);
      // console.log(data)
  return data;
}

export default Usecustom;

