// locates the ID of an element

let eth = document.getElementById("ethereum");
let btc = document.getElementById("bitcoin");
let bnb = document.getElementById("binance");
let xrp = document.getElementById("ripple");
let ada = document.getElementById("cardano");
let ltc = document.getElementById("litecoin");

let lastPrice = null;

/* Function below: 
1. Gets data from 
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md 
to access live price of crypto in euros.
2. Logs to the console if a connection has been established using "onopen" property.
2. parses JSON into an object 
3. Converts a string into floating-point number and returns a string representin a number in
fixed-point notation.
4. Assigns "eth" (or other crypto) variable to price.
5. Changes color to green when price increases and to red if it decreases.
*/

// Many thanks to https://www.youtube.com/watch?v=XXuUNZIQUVA for providing correct code for importing websockets.

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
    console.error(`WebSocket connection for ${abr} closed. Reason: ${event.reason}`);
    crypto.innerText = "Error, please try again later";
  };

  ws.onerror = (error) => {
    console.error(`WebSocket error for ${abr}: ${error.message}`);
    crypto.innerText = "Error, please try again later";
  };
}

handlePrice("etheur", eth);
handlePrice("btceur", btc);
handlePrice("bnbeur", bnb);
handlePrice("xrpeur", xrp);
handlePrice("adaeur", ada);
handlePrice("ltceur", ltc);
