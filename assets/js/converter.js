

let enterAmount = document.getElementById('enter-amount');
let convertButton = document.querySelector('.convert');
let fromCrypto = document.getElementById('from-crypto');
let toFiat = document.getElementById('to-fiat');
let convertedValue = document.getElementById('conversion-results');
let resultFrom;
let resultTo;
let searchValue;




let cryptoCurrencies = ['BTC','ETH', 'BNB', 'XRP', 'ADA', 'LTC'];
let currencies = ['GBP','USD','EUR', 'PLN', 'JPY', 'CHF'];

cryptoCurrencies.forEach(function(crypto) {
  let url = 'https://min-api.cryptocompare.com/data/price?fsym='+ crypto +'&tsyms='+ currencies.join(',');
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', 'b72c21e2fdbeb4b64dba71f7ffd1aa10f350ac52d66f72a5637abcbaed176614');
  xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.response);
          console.log("Price of "+ crypto + " : ");
          for (let currency in data) {
            console.log("\t"+ currency + " : " + data[currency]);
          }
      } else {
          console.error(xhr.response);
      }
  };
  xhr.send();
});