let eth = document.getElementById("ethereum");
let btc = document.getElementById("bitcoin");
let ethWs = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let btcWs = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');

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