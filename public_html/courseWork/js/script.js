var btcButton = document.getElementById("Bitcoin")
var ethButton = document.getElementById("Ethereum")
var ltcButton = document.getElementById("Litecoin")

function btcFunction()
{
	let p = document.getElementById("video") 
	p.src = "https://www.youtube.com/embed/Um63OQz3bjo"   
}

function ethFunction()
{
	let p = document.getElementById("video") 
	p.src = "https://www.youtube.com/embed/dTcojDhr-eE"
}

function ltcFunction()
{
	let p = document.getElementById("video")
	p.src = "https://www.youtube.com/embed/2dmf4LhY11A"
}


function sendRequest() {
   let myRequest = new XMLHttpRequest()
   myRequest.open('GET',"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
   myRequest.responseType = 'json'
   myRequest.onload = () =>{
   let x = (myRequest.response)
   let price = x.bitcoin.usd
   let count = document.getElementById("txt").value
   let elem = document.getElementById("text")
   elem.value = price * count + " USD"
   }  
   myRequest.send()
}

