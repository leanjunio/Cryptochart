$(document).ready(function(){
  callBaseUrl();
});

var callBaseUrl = function(){
  var baseUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=CAD';

  $.ajax({
    async: true,
    url: baseUrl,
    method: 'GET',
    success: function(data){
      var coins = data;
      displayView(coins);
    },
    error: function(){
      console.log('There was an error in retrieving the data.')
    }
  })
}

var displayView = function(coin){
  
  $.each(coin, function(i) {

    // create table row for each coin
    var tr = $('<tr></tr>');
    var th = $('<th scope="row"></th>');

    var td_name = $('<td></td>')
    var td_symbol = $('<td></td>')
    var td_value = $('<td></td>')
    var td_market_cap = $('<td></td>');
    var td_change = $('<td></td>');

    th.text(i+1);
    td_name.text(coin[i].name);
    td_symbol.text(coin[i].symbol);
    td_value.text('$ ' + coin[i].price_cad);
    td_market_cap.text(coin[i].market_cap_cad);
    td_change.text(coin[i].percent_change_24h);

    tr.append(th, td_name, td_symbol, td_value, td_market_cap, td_change);
    
    // append the modified 'tr' to the 'tbody'
    $('#data > tbody').append(tr);
  });

  
}
