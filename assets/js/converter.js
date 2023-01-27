
// locates the ID of an element

let eth = document.getElementById("ethereum");
let btc = document.getElementById("bitcoin");
let bnb = document.getElementById("binance");
let xrp = document.getElementById("ripple");
let ada = document.getElementById("cardano");
let ltc = document.getElementById("litecoin");

/* Gets data from 
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md 
to access live price of crypto in euros 
*/

let ethWs = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let btcWs = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
let bnbWs = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade');
let xrpWs = new WebSocket('wss://stream.binance.com:9443/ws/xrpeur@trade');
let adaWs = new WebSocket('wss://stream.binance.com:9443/ws/adaeur@trade');
let ltcWs = new WebSocket('wss://stream.binance.com:9443/ws/ltceur@trade');

let lastPrice = null;

/* Functions below: 
1. parse JSON into an object 
2. Convert a string into floating-point number and returns a string representin a number in
fixed-point notation.
3. Assign "eth" (or other crypto) variable to price.
*/

ethWs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  eth.innerText = price;
}

btcWs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  btc.innerText = price;
}

bnbWs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  bnb.innerText = price;
}

xrpWs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  xrp.innerText = price;
}

adaWs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  ada.innerText = price;
}

ltcWs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  ltc.innerText = price;
}