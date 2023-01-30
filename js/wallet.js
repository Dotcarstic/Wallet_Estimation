$(document).ready(function() {
    function getCryptoData() {
      const cryptoArray = ["BNB", "ADA", "GALA", "ETH"];
      cryptoArray.forEach(function(crypto) {
        $.ajax({
          type: "GET",
          url:
            "https://min-api.cryptocompare.com/data/price?fsym=" +
            crypto +
            "&tsyms=USD",
          success: function(data) {
            $("#" + crypto).html(data.USD );
            $("#" + crypto + "Amount").data("price", data.USD);
          }
        });
      });
    }
    getCryptoData();
    setInterval(getCryptoData, 10000);

    $("form").submit(function(e) {
      e.preventDefault();
      let total = 0;
      const cryptoArray = ["BNB", "ADA", "GALA", "ETH"];
      cryptoArray.forEach(function(crypto) {
        const amount = parseFloat($("#" + crypto + "Amount").val());
        const price = $("#" + crypto + "Amount").data("price");
        if (!isNaN(amount) && price) {
          total += amount * price;
        }
      });
      $("#total").html(total + " USD");
    });
  });

  const axios = require('axios');

  const symbols = {
    BTC: 1,
    ETH: 1027,
    ADA: 2010,
    GALA: 4531,
    BNB: 1839
  };
  
  async function getATH(symbol) {
    const response = await axios.get(`https://api.coinmarketcap.com/v2/ticker/${symbol}/`);
    const data = response.data.data;
    return data.ath;
  }
  
  Promise.all(Object.values(symbols).map(symbol => getATH(symbol)))
    .then(prices => {
      Object.keys(symbols).forEach((symbol, index) => {
        console.log(`ATH price of ${symbol}: ${prices[index]}`);
      });
    })
    .catch(error => console.error(error));
  