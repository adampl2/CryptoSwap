/** locates the ID of an element */

let eth = document.getElementById("ethereum");
let btc = document.getElementById("bitcoin");
let bnb = document.getElementById("binance");
let xrp = document.getElementById("ripple");
let ada = document.getElementById("cardano");
let ltc = document.getElementById("litecoin");

/** Stores the currency pairs to avoid calling the handlePrice 6 times. */

const CRYPTOS_ARRAY = [{
    currency_pair: "etheur",
    crypto: eth
  },
  {
    currency_pair: "btceur",
    crypto: btc,
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

function handlePrice(currency_pair, crypto) {
  let webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${currency_pair}@trade`);
  let lastPrice = null;

  webSocket.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    crypto.innerText = price;
    crypto.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;

    if (currency_pair === 'btceur') {
      document.getElementById('btcAmount').disabled = false;
    }
  };

  webSocket.onclose = (event) => {
    crypto.innerText = `Error for ${currency_pair}, ${event.reason}`;
    handlePrice(currency_pair, crypto);
  };

  webSocket.onerror = (error) => {
    crypto.innerText = `Error for ${currency_pair}, ${error.message}`;
    handlePrice(currency_pair, crypto);
  };
}

/** Converts any btc amount to eur */

document.getElementById("btcAmount").addEventListener("input", calculateConversion);

function calculateConversion() {

  let btcAmount = document.getElementById("btcAmount").value;
  let euroAmount = document.getElementById("eurAmount");
  let btcEurRate = parseFloat(btc.innerText);
  let errorMessage = document.getElementById("error-msg");

  euroAmount.innerText = (btcAmount * btcEurRate).toFixed(2);

  /** if value is not a number or is greater than 21 million error will show */

  if (isNaN(btcAmount)) {
    errorMessage.innerText = "Please enter only numeric values";
    errorMessage.style.color = "red";
    euroAmount.innerText = "";
  } else if (btcAmount > 21000000) {
    errorMessage.innerText = "The max limit is 21000000";
    errorMessage.style.color = "red";
    euroAmount.innerText = "";
  } else {
    errorMessage.innerText = "";
    return;
  }
}

/** Iterates the cryptoArray and calls the handlePrice function */

function initializeApp() {
  document.getElementById("btcAmount").disabled = true;
  document.getElementById("btcAmount").addEventListener("input", calculateConversion);
  CRYPTOS_ARRAY.forEach(({
    currency_pair,
    crypto
  }) => handlePrice(currency_pair, crypto));

}

addEventListener('DOMContentLoaded', initializeApp);