// module "droplet_get.js"

// definicia funkcie na GET request dropletu    
  function getRequest() {
  return fetch('https://api.digitalocean.com/v2/droplets?page=1&per_page=1', {
    credentials: 'omit', // 'include', default: 'omit'
    method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
    headers: new Headers({
      'Content-Type': 'application/json',
	  'Authorization': 'Bearer xxx'
    }),
	mode: "cors",
  }) // koniec fetchovania
  .then(response => response.json())
  .then(function(id_dropletu) {

  	  if(!id_dropletu.droplets.hasOwnProperty('0')){
		document.getElementById("dropletid").innerHTML = "Neexistuje ziadne id dropletu.";
		return false;  //ukoncenie celeho procesingu funkcie getRequest()
		} 

$("#dropletid").text("id dropletu je " + id_dropletu.droplets[0].id);
$("#postodpoved1").text("created_at je  " + id_dropletu.droplets[0].created_at);
$("#postodpoved2").text("cena za mesiac " + id_dropletu.droplets[0].size.price_monthly + " eur");
$("#postodpoved3").text("ip " + id_dropletu.droplets[0].networks.v4[0].ip_address);
$("#postodpoved4").text("https://" + id_dropletu.droplets[0].networks.v4[0].ip_address + "/media/novyklient.ovpn");
$("#postodpoved4").attr("href", "https://" + id_dropletu.droplets[0].networks.v4[0].ip_address + "/media/novyklient.ovpn");

return id_dropletu.droplets[0].id;   // funkcia vrati promise id-cka dropletu pre dalsie funkcie(stale som v .then!), zaroven sa funkcia get ukonci.   
							})		//koniec then promisu
   .catch(error => alert("tlacitko get error " + error))
};		//koniec definicie funkcie get request

export { getRequest };
