var cryptoCurrencies = ['BTC','ETH'];
var currencies = ['GBP','USD','EUR','JPY'];

cryptoCurrencies.forEach(function(crypto) {
  var url = 'https://min-api.cryptocompare.com/data/price?fsym='+ crypto +'&tsyms='+ currencies.join(',');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', 'b72c21e2fdbeb4b64dba71f7ffd1aa10f350ac52d66f72a5637abcbaed176614');
  xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.response);
          console.log("Price of "+ crypto + " : ");
          for (var currency in data) {
            console.log("\t"+ currency + " : " + data[currency]);
          }
      } else {
          console.error(xhr.response);
      }
  };
  xhr.send();
});