
let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let btc = document.getElementById("bitcoin");
let lastPrice = null;


ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  btc.innerText = price; 
}