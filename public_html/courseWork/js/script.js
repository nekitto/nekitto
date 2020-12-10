
var currencies = ["bitcoin","ethereum","litecoin","ripple"];
var selector_list_lowest = ["bitcoin_lowest_price","ethereum_lowest_price","litecoin_lowest_price","ripple_lowest_price"];
var selector_list_highest = ["bitcoin_highest_price","ethereum_highest_price","litecoin_highest_price","ripple_highest_price"];
var selector_list_current = ["bitcoin_current_price","ethereum_current_price","litecoin_current_price","ripple_current_price"];
/*
   let myRequest = new XMLHttpRequest()
   myRequest.open('GET',"https://api.coingecko.com/api/v3/coins/" + currencies[0]);
   myRequest.responseType = 'json';
   myRequest.onload = () =>{
   let BTCx = (myRequest.response);
   let BTCcurrent_price = BTCx["market_data"]["current_price"]["usd"];
   let BTCdaily_low = BTCx["market_data"]["low_24h"]["usd"];
   let BTCdaily_high = BTCx["market_data"]["high_24h"]["usd"];
   BTCelemLowPrice = document.getElementById(selector_list_lowest[0]);
   BTCelemCurrentPrice = document.getElementById(selector_list_current[0]);
   BTCelemHighPrice = document.getElementById(selector_list_highest[0]);
   
   BTCelemLowPrice.innerHTML = BTCdaily_low + "$";
   BTCelemHighPrice.innerHTML = BTCdaily_high + "$";
   BTCelemCurrentPrice.innerHTML = BTCcurrent_price + "$";
   }
   myRequest.send()
 */  
function btcActive()
   {
	   document.getElementById("btc").className = "list-group-item list-group-item-success"
	   document.getElementById("eth").className = "list-group-item"
	   document.getElementById("ltc").className = "list-group-item"
	   document.getElementById("xrp").className = "list-group-item"
	   document.getElementById("txt").placeholder = "Bitcoin"
   }
   
function ethActive()
   {
	   document.getElementById("eth").className = "list-group-item list-group-item-success"
	   document.getElementById("btc").className = "list-group-item"
	   document.getElementById("ltc").className = "list-group-item"
	   document.getElementById("xrp").className = "list-group-item"
	   document.getElementById("txt").placeholder = "Ethereum"
   }
   
function ltcActive()
   {
	   document.getElementById("ltc").className = "list-group-item list-group-item-success"
	   document.getElementById("eth").className = "list-group-item"
	   document.getElementById("btc").className = "list-group-item"
	   document.getElementById("xrp").className = "list-group-item"
	   document.getElementById("txt").placeholder = "Litecoin"
   }
   
function xrpActive()
   {
	   document.getElementById("xrp").className = "list-group-item list-group-item-success"
	   document.getElementById("eth").className = "list-group-item"
	   document.getElementById("ltc").className = "list-group-item"
	   document.getElementById("btc").className = "list-group-item"
	   document.getElementById("txt").placeholder = "Ripple"
   }
   
function count()
{
	
	let temp = document.getElementById("txt").placeholder;
	if(temp == "")
	{
		alert("Pick currency first");
		return;
	}
	let currency = temp.toLowerCase();
	var usd = "usd";
	let request = new XMLHttpRequest();
    request.open('GET',"https://api.coingecko.com/api/v3/simple/price?ids=" +  currency + "&vs_currencies=usd");
    request.responseType = 'json';
    request.onload = () =>{
    let x = (request.response);
	let price = x[currency][usd];
	let quantity = document.getElementById("txt").value;
    let txt2 = document.getElementById("txt2");
	txt2.value = quantity * price;
   }
   request.send();
   
}
/* let ETHRequest = new XMLHttpRequest()
   ETHRequest.open('GET',"https://api.coingecko.com/api/v3/coins/" + currencies[1]);
   ETHRequest.responseType = 'json';
   ETHRequest.onload = () =>{
   let ETHx = (myRequest.response);
   let ETHcurrent_price = ETHx["market_data"]["current_price"]["usd"];
   let ETHdaily_low = ETHx["market_data"]["low_24h"]["usd"];
   let ETHdaily_high = ETHx["market_data"]["high_24h"]["usd"];
   ETHelemLowPrice = document.getElementById(selector_list_lowest[1]);
   ETHelemCurrentPrice = document.getElementById(selector_list_current[1]);
   ETHelemHighPrice = document.getElementById(selector_list_highest[1]);
   
   ETHelemLowPrice.innerHTML = ETHdaily_low + "$";
   ETHelemHighPrice.innerHTML = ETHdaily_high + "$";
   ETHelemCurrentPrice.innerHTML = ETHcurrent_price + "$";
   }
   myRequest.send()
   
   */



