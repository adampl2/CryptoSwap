/** locates the ID of an element */ 

let eth = document.getElementById("ethereum");
let btc = document.getElementById("bitcoin");
let bnb = document.getElementById("binance");
let xrp = document.getElementById("ripple");
let ada = document.getElementById("cardano");
let ltc = document.getElementById("litecoin");

/** Stores the currency pairs to avoid calling the handlePrice 6 times. */ 

const  CRYPTOS_ARRAY = [{
    abr: "etheur",
    crypto: eth
  },
  {
    abr: "btceur",
    crypto: btc
  },
  {
    abr: "bnbeur",
    crypto: bnb
  },
  {
    abr: "xrpeur",
    crypto: xrp
  },
  {
    abr: "adaeur",
    crypto: ada
  },
  {
    abr: "ltceur",
    crypto: ltc
  }
];

/** 
 * Function below: 
 * Gets data from https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md 
 * to access live price of crypto in euros.
 * Logs to the console if a connection has been established using "onopen" property.
 * parses JSON into an object 
 * Converts a string into floating-point number and returns a string representin a number in fixed-point notation.
 * Assigns "eth" (or other crypto) variable to price.
 * Changes color to green when price increases and to red if it decreases.
 * Returns error message when one is encauntered both in the console and to inform user.
*/ 

function handlePrice(abr, crypto) {
  let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${abr}@trade`);
  let lastPrice = null;

  ws.onopen = () => {
    console.log(`WebSocket connection for ${abr} established`);
  };

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    crypto.innerText = price;
    crypto.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
  };

  ws.onclose = (event) => {
    crypto.innerText = `Error for ${abr}, ${event.reason}`;
  };

  ws.onerror = (error) => {
    crypto.innerText = `Error for ${abr}, ${error.message}`;
  };
}

/** Iterates the cryptoArray and calls the handlePrice function */

CRYPTOS_ARRAY.forEach(({abr, crypto}) => handlePrice(abr, crypto));

addEventListener('DOMContentLoaded', handlePrice);

/**
 * let btcAmount = document.getElementById("btcAmount").value;
  let euroAmount = document.getElementById("eurAmount");
  let btcEurRate = parseFloat(document.getElementById("bitcoin").innerText);
  
function calculateConversion() {
  
  euroAmount.value = (btcAmount * btcEurRate).toFixed(2);
}
 */