/** locates the ID of an element */

let eth = document.getElementById("ethereum");
let btc = document.getElementById("bitcoin");
let bnb = document.getElementById("binance");
let xrp = document.getElementById("ripple");
let ada = document.getElementById("cardano");
let ltc = document.getElementById("litecoin");

/** Stores the currency pairs to avoid calling the handlePrice 6 times. */

let cryptoRates = {
  "bitcoin": 0
};

const CRYPTOS_ARRAY = [{
    currency_pair: "etheur",
    crypto: eth
  },
  {
    currency_pair: "btceur",
    crypto: btc,
    rates_key: "bitcoin"
  },
  {
    currency_pair: "bnbeur",
    crypto: bnb
  },
  {
    currency_pair: "xrpeur",
    crypto: xrp
  },
  {
    currency_pair: "adaeur",
    crypto: ada
  },
  {
    currency_pair: "ltceur",
    crypto: ltc
  }
];

/** 
 * Function below: 
 * Gets data from https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md 
 * to access live price of crypto in euros.
 * Logs to the console if a connection has been established using "onopen" property.
 * parses JSON into an object 
 * Converts a string into floating-point number and returns a string representing a number in fixed-point notation.
 * Assigns "eth" (or other crypto) variable to price.
 * Changes color to green when price increases and to red if it decreases.
 * Returns error message when one is encountered both in the console and to inform user.
 */

function handlePrice(currency_pair, crypto, rates_key) {
  let webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${currency_pair}@trade`);
  let lastPrice = null;

  webSocket.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    crypto.innerText = price;
    crypto.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
    cryptoRates[rates_key] = price;
  };

  webSocket.onclose = (event) => {
    crypto.innerText = `Error for ${currency_pair}, ${event.reason}`;
  };

  webSocket.onerror = (error) => {
    crypto.innerText = `Error for ${currency_pair}, ${error.message}`;
  };
}

/** handlePrice will execute every 5 seconds using the setInterval JS function */

setInterval(handlePrice, 10 * 500);

/** Converts any btc amount to eur */

document.getElementById("btcAmount").addEventListener("input", calculateConversion);

function calculateConversion() {

  let btcAmount = document.getElementById("btcAmount").value;
  let euroAmount = document.getElementById("eurAmount");
  let btcEurRate = parseFloat(btc.innerText);

  euroAmount.innerText = (btcAmount * btcEurRate).toFixed(2);
}

/** Iterates the cryptoArray and calls the handlePrice function */

CRYPTOS_ARRAY.forEach(({
  currency_pair,
  crypto,
  rates_key
}) => handlePrice(currency_pair, crypto, rates_key));

addEventListener('DOMContentLoaded', handlePrice, calculateConversion);