// initialize callBaseUrl() when the DOM loads
$(document).ready(function(){
  callBaseUrl();
});

var callBaseUrl = function(){
  var baseUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=CAD';

  $.ajax({
    async: true,
    url: baseUrl,
    method: 'GET',
    success: function(data){ // pass the 'data' object into displayView function if success
      displayView(data);
    },
    error: function(){
      console.log('There was an error in retrieving the data.')
    }
  })
}

// displays the view by rendering and formatting the data into their elements
var displayView = function(coin){
  
  var total_el = $('#total');
  var total = 0;

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
    total += Number(coin[i].market_cap_cad);
    
    tr.append(th, td_name, td_symbol, td_value, td_market_cap, td_change);
    
    $('#data > tbody').append(tr);

  });
  
  // get the total market cap value and append it as text for h3#total
  total_el.text(total);
}
